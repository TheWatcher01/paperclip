import type {
  AdapterExecutionContext,
  AdapterExecutionResult,
  AdapterInvocationMeta,
} from "@paperclipai/adapter-utils";
import { resolveCopilotToken, getCopilotHeaders } from "./token.js";
import { parseCopilotResponse, type ParsedCopilotResponse } from "./parse.js";

// ---------------------------------------------------------------------------
// GitHub Copilot adapter execution
//
// Calls the Copilot API directly (OpenAI chat completions format).
// No CLI spawning — pure HTTP client.
// ---------------------------------------------------------------------------

function asString(v: unknown, fallback: string): string {
  return typeof v === "string" && v.length > 0 ? v : fallback;
}

function asNumber(v: unknown, fallback: number): number {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return fallback;
}

function renderTemplate(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g, (_, key: string) => {
    return vars[key] ?? "";
  });
}

export async function execute(
  ctx: AdapterExecutionContext,
): Promise<AdapterExecutionResult> {
  const { runId, agent, runtime, config, context, onLog, onMeta } = ctx;

  const model = asString(config.model, "gpt-5.4-mini");
  const maxTokens = asNumber(config.maxTokens, 8192);
  const temperature = asNumber(config.temperature, 0.7);
  const timeoutSec = asNumber(config.timeoutSec, 300);
  const systemPrompt = asString(config.systemPrompt, "");
  const reasoningEffort = asString(config.reasoningEffort, "");

  // Construire le prompt
  const promptTemplate = asString(
    config.promptTemplate,
    "You are an AI agent working for {{company.name}}. Complete your assigned work.",
  );
  const prompt = renderTemplate(promptTemplate, {
    agentId: agent.id,
    companyId: agent.companyId,
    runId,
    "agent.name": agent.name,
    "company.name": String((context as Record<string, unknown>).companyName ?? ""),
    taskId: String((context as Record<string, unknown>).taskId ?? ""),
    taskTitle: String((context as Record<string, unknown>).taskTitle ?? ""),
    wakeReason: String((context as Record<string, unknown>).wakeReason ?? ""),
  });

  // Resoudre le token
  let tokenData: { token: string; baseUrl: string };
  try {
    tokenData = await resolveCopilotToken(config);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    await onLog("stderr", `[github_copilot] Token resolution failed: ${msg}\n`);
    return {
      exitCode: 1,
      signal: null,
      timedOut: false,
      errorMessage: msg,
      errorCode: "copilot_token_error",
    };
  }

  // Construire les messages
  const messages: Array<{ role: string; content: string }> = [];
  if (systemPrompt) {
    messages.push({ role: "system", content: systemPrompt });
  }

  // Reprendre la session si elle existe
  const sessionHistory = (runtime.sessionParams?.history ?? []) as Array<{
    role: string;
    content: string;
  }>;
  messages.push(...sessionHistory);
  messages.push({ role: "user", content: prompt });

  // Metadata pour le log
  if (onMeta) {
    const meta: AdapterInvocationMeta = {
      adapterType: "github_copilot",
      command: `POST ${tokenData.baseUrl}/chat/completions`,
      context: { model, maxTokens, temperature, messageCount: messages.length },
    };
    await onMeta(meta);
  }

  await onLog("stdout", `[github_copilot] Calling ${model} via ${tokenData.baseUrl}\n`);

  // Appel API
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutSec * 1000);

  try {
    const headers = getCopilotHeaders(tokenData.token);
    const requestBody: Record<string, unknown> = {
      model,
      messages,
      max_tokens: maxTokens,
      temperature,
      stream: true,
    };

    // Reasoning effort pour o-series et modeles compatibles (o3, o4-mini, etc.)
    if (reasoningEffort) {
      requestBody.reasoning_effort = reasoningEffort;
    }

    const body = JSON.stringify(requestBody);

    const res = await fetch(`${tokenData.baseUrl}/chat/completions`, {
      method: "POST",
      headers,
      body,
      signal: controller.signal,
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      await onLog("stderr", `[github_copilot] API error ${res.status}: ${errBody.slice(0, 500)}\n`);

      if (res.status === 429) {
        const retryAfterRaw = res.headers.get("retry-after") ?? res.headers.get("x-ratelimit-reset");
        const retryAfterSec = retryAfterRaw ? Math.max(0, Number(retryAfterRaw)) : null;
        const remaining = res.headers.get("x-ratelimit-remaining");
        return {
          exitCode: 1,
          signal: null,
          timedOut: false,
          errorMessage: `GitHub Copilot rate limit reached. ${retryAfterSec != null ? `Retry after ${retryAfterSec}s.` : ""}`.trim(),
          errorCode: "copilot_rate_limited",
          errorMeta: {
            retryAfterSec: retryAfterSec ?? null,
            rateLimitRemaining: remaining != null ? Number(remaining) : null,
          },
        };
      }

      return {
        exitCode: 1,
        signal: null,
        timedOut: false,
        errorMessage: `Copilot API returned ${res.status}: ${errBody.slice(0, 200)}`,
        errorCode: "copilot_api_error",
      };
    }

    // Lire le stream SSE
    const responseText = await readSSEStream(res, onLog);
    const parsed = parseCopilotResponse(responseText, model);

    // Construire l'historique de session pour la persistence
    const newHistory = [
      ...sessionHistory,
      { role: "user" as const, content: prompt },
      ...(parsed.assistantContent
        ? [{ role: "assistant" as const, content: parsed.assistantContent }]
        : []),
    ];
    // Garder seulement les 20 derniers messages pour eviter l'explosion de contexte
    const trimmedHistory = newHistory.slice(-20);

    return {
      exitCode: 0,
      signal: null,
      timedOut: false,
      usage: parsed.usage,
      provider: "github-copilot",
      biller: "github",
      billingType: "subscription_included",
      model: parsed.model || model,
      costUsd: 0,
      summary: parsed.assistantContent?.slice(0, 500) ?? null,
      sessionParams: { history: trimmedHistory },
      resultJson: {
        model: parsed.model,
        usage: parsed.usage,
        content: parsed.assistantContent,
      },
    };
  } catch (err) {
    if (controller.signal.aborted) {
      await onLog("stderr", `[github_copilot] Request timed out after ${timeoutSec}s\n`);
      return {
        exitCode: null,
        signal: "SIGTERM",
        timedOut: true,
        errorMessage: `Timed out after ${timeoutSec}s`,
      };
    }
    const msg = err instanceof Error ? err.message : String(err);
    await onLog("stderr", `[github_copilot] Request failed: ${msg}\n`);
    return {
      exitCode: 1,
      signal: null,
      timedOut: false,
      errorMessage: msg,
      errorCode: "copilot_request_error",
    };
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Read an SSE stream from a fetch Response and accumulate content.
 * Logs assistant output chunks to stdout in real-time.
 */
async function readSSEStream(
  res: Response,
  onLog: (stream: "stdout" | "stderr", chunk: string) => Promise<void>,
): Promise<string> {
  const reader = res.body?.getReader();
  if (!reader) return "";

  const decoder = new TextDecoder();
  const chunks: string[] = [];
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      if (!line.startsWith("data: ")) continue;
      const data = line.slice(6).trim();
      if (data === "[DONE]") continue;

      try {
        const event = JSON.parse(data) as {
          choices?: Array<{
            delta?: { content?: string; role?: string };
            finish_reason?: string | null;
          }>;
          model?: string;
          usage?: {
            prompt_tokens?: number;
            completion_tokens?: number;
          };
        };

        const content = event.choices?.[0]?.delta?.content;
        if (content) {
          chunks.push(content);
          await onLog("stdout", content);
        }
      } catch {
        // Ignorer les lignes non-JSON
      }
    }
  }

  // Collecter les donnees SSE brutes pour le parsing
  return chunks.join("");
}
