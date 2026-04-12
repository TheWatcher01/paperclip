import type {
  AdapterSessionCodec,
  ProviderQuotaResult,
  AdapterConfigSchema,
} from "@paperclipai/adapter-utils";
import { type, models, agentConfigurationDoc } from "../index.js";

export { execute } from "./execute.js";
export { testEnvironment } from "./test.js";
export { parseCopilotResponse, parseNonStreamingResponse } from "./parse.js";
export {
  resolveCopilotToken,
  getCopilotHeaders,
  fetchCopilotUsage,
} from "./token.js";

/**
 * Session codec for persisting conversation history across heartbeats.
 */
export const sessionCodec: AdapterSessionCodec = {
  deserialize(raw: unknown): Record<string, unknown> | null {
    if (!raw || typeof raw !== "object") return null;
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.history)) return obj;
    return null;
  },
  serialize(
    params: Record<string, unknown> | null,
  ): Record<string, unknown> | null {
    if (!params) return null;
    return { history: params.history ?? [] };
  },
  getDisplayId(params: Record<string, unknown> | null): string | null {
    if (!params) return null;
    const history = params.history as unknown[];
    return history ? `${history.length} messages` : null;
  },
};

/**
 * Quota windows — reports GitHub Copilot usage.
 */
export async function getQuotaWindows(): Promise<ProviderQuotaResult> {
  const { fetchCopilotUsage } = await import("./token.js");
  const githubToken =
    process.env.GITHUB_TOKEN ?? process.env.GITHUB_COPILOT_TOKEN;

  if (!githubToken) {
    return {
      provider: "github-copilot",
      ok: false,
      error: "No GITHUB_TOKEN configured for quota lookup",
      windows: [],
    };
  }

  try {
    const usage = await fetchCopilotUsage(githubToken);
    const windows = [];

    if (usage.premiumRemaining !== null) {
      windows.push({
        label: "Premium interactions",
        usedPercent: 100 - usage.premiumRemaining,
        resetsAt: null,
        valueLabel: `${usage.premiumRemaining}% remaining`,
      });
    }

    if (usage.chatRemaining !== null) {
      windows.push({
        label: "Chat",
        usedPercent: 100 - usage.chatRemaining,
        resetsAt: null,
        valueLabel: `${usage.chatRemaining}% remaining`,
      });
    }

    return {
      provider: "github-copilot",
      source: usage.plan ?? "copilot",
      ok: true,
      windows,
    };
  } catch (err) {
    return {
      provider: "github-copilot",
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      windows: [],
    };
  }
}

/**
 * Declarative config schema for the UI form.
 */
export function getConfigSchema(): AdapterConfigSchema {
  return {
    fields: [
      {
        key: "model",
        label: "Model",
        type: "combobox",
        default: "gpt-5.4-mini",
        options: models.map((m) => ({ label: m.label, value: m.id })),
        hint: "Model to use via GitHub Copilot proxy",
        required: false,
      },
      {
        key: "systemPrompt",
        label: "System Prompt",
        type: "textarea",
        hint: "System prompt prepended to every run",
        required: false,
      },
      {
        key: "promptTemplate",
        label: "Prompt Template",
        type: "textarea",
        default:
          "You are an AI agent working for {{company.name}}. Complete your assigned work.",
        hint: "Supports {{agentId}}, {{companyId}}, {{runId}}, {{agent.name}}, {{company.name}}, {{taskId}}, {{taskTitle}}, {{wakeReason}}",
        required: false,
      },
      {
        key: "maxTokens",
        label: "Max Output Tokens",
        type: "number",
        default: 8192,
        hint: "Maximum tokens in the response",
        required: false,
      },
      {
        key: "temperature",
        label: "Temperature",
        type: "number",
        default: 0.7,
        hint: "Sampling temperature (0-2)",
        required: false,
      },
      {
        key: "reasoningEffort",
        label: "Reasoning Effort",
        type: "select",
        options: [
          { label: "None (default)", value: "" },
          { label: "Minimal", value: "minimal" },
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
          { label: "Max", value: "max" },
        ],
        hint: "Reasoning effort for o-series and compatible models",
        required: false,
      },
      {
        key: "timeoutSec",
        label: "Timeout (seconds)",
        type: "number",
        default: 300,
        hint: "HTTP request timeout",
        required: false,
      },
      {
        key: "credentialPath",
        label: "Credential File Path",
        type: "text",
        hint: "Path to github-copilot.token.json (default: ~/.openclaw/credentials/)",
        required: false,
      },
    ],
  };
}
