import type {
  AdapterEnvironmentCheck,
  AdapterEnvironmentTestContext,
  AdapterEnvironmentTestResult,
} from "@paperclipai/adapter-utils";
import { resolveCopilotToken } from "./token.js";

// ---------------------------------------------------------------------------
// Environment test for GitHub Copilot adapter
// ---------------------------------------------------------------------------

function summarizeStatus(
  checks: AdapterEnvironmentCheck[],
): "pass" | "warn" | "fail" {
  if (checks.some((c) => c.level === "error")) return "fail";
  if (checks.some((c) => c.level === "warn")) return "warn";
  return "pass";
}

export async function testEnvironment(
  ctx: AdapterEnvironmentTestContext,
): Promise<AdapterEnvironmentTestResult> {
  const checks: AdapterEnvironmentCheck[] = [];
  const config = (ctx.config ?? {}) as Record<string, unknown>;

  // Verifier la resolution du token
  try {
    const { token, baseUrl } = await resolveCopilotToken(config);
    checks.push({
      code: "copilot_token_valid",
      level: "info",
      message: `Copilot token resolved successfully`,
      detail: `Base URL: ${baseUrl}`,
    });

    // Sonde de sante — appel minimal
    try {
      const model = typeof config.model === "string" ? config.model : "gpt-4.1";
      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Editor-Version": "vscode/1.96.2",
          "User-Agent": "GitHubCopilotChat/0.26.7",
          "X-Github-Api-Version": "2025-04-01",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: "Respond with: hello" }],
          max_tokens: 10,
          stream: false,
        }),
        signal: AbortSignal.timeout(30_000),
      });

      if (res.ok) {
        checks.push({
          code: "copilot_probe_passed",
          level: "info",
          message: `Copilot API probe succeeded (model: ${model})`,
        });
      } else {
        const body = await res.text().catch(() => "");
        checks.push({
          code: "copilot_probe_failed",
          level: "warn",
          message: `Copilot API probe returned ${res.status}`,
          detail: body.slice(0, 200),
          hint: "The token may be valid but the model may be unavailable",
        });
      }
    } catch (err) {
      checks.push({
        code: "copilot_probe_error",
        level: "warn",
        message: "Copilot API probe failed",
        detail: err instanceof Error ? err.message : String(err),
      });
    }
  } catch (err) {
    checks.push({
      code: "copilot_token_missing",
      level: "error",
      message: err instanceof Error ? err.message : "No Copilot token found",
      hint: "Set GITHUB_TOKEN or GITHUB_COPILOT_TOKEN, or ensure ~/.openclaw/credentials/github-copilot.token.json exists",
    });
  }

  return {
    adapterType: ctx.adapterType,
    status: summarizeStatus(checks),
    checks,
    testedAt: new Date().toISOString(),
  };
}
