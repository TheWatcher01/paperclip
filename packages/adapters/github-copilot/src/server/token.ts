import { promises as fs } from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// GitHub Copilot token management
//
// Handles reading cached tokens and exchanging GitHub tokens for Copilot API
// tokens via the GitHub internal API.
// ---------------------------------------------------------------------------

export interface CopilotTokenCache {
  token: string;
  expiresAt: number;
  updatedAt: number;
}

interface CopilotTokenExchangeResponse {
  token: string;
  expires_at: number;
}

const COPILOT_TOKEN_EXCHANGE_URL = "https://api.github.com/copilot_internal/v2/token";
const TOKEN_SAFETY_MARGIN_MS = 5 * 60 * 1000; // 5 minutes
const EDITOR_VERSION = "vscode/1.96.2";
const USER_AGENT = "GitHubCopilotChat/0.26.7";
const API_VERSION = "2025-04-01";

let cachedToken: CopilotTokenCache | null = null;

/**
 * Extract the API base URL from a Copilot token string.
 * Tokens contain a semicolon-delimited `proxy-ep=...` field.
 * We replace the `proxy.` prefix with `api.` to get the base URL.
 */
export function extractBaseUrl(tokenString: string): string {
  const match = tokenString.match(/proxy-ep=([^;]+)/);
  if (!match) return "https://api.individual.githubcopilot.com";
  const proxyHost = match[1];
  const apiHost = proxyHost.replace(/^proxy\./, "api.");
  return `https://${apiHost}`;
}

/**
 * Parse token fields from the semicolon-delimited token string.
 */
export function parseTokenFields(tokenString: string): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const part of tokenString.split(";")) {
    const eq = part.indexOf("=");
    if (eq > 0) {
      fields[part.slice(0, eq)] = part.slice(eq + 1);
    }
  }
  return fields;
}

/**
 * Check if a cached token is still usable (not expired with safety margin).
 */
function isTokenUsable(token: CopilotTokenCache): boolean {
  return token.expiresAt - Date.now() > TOKEN_SAFETY_MARGIN_MS;
}

/**
 * Default credential file paths to check.
 */
function defaultCredentialPaths(): string[] {
  const home = process.env.HOME ?? process.env.USERPROFILE ?? "";
  const openclawState = process.env.OPENCLAW_STATE_DIR ?? path.join(home, ".openclaw");
  return [
    path.join(openclawState, "credentials", "github-copilot.token.json"),
  ];
}

/**
 * Try to find a ghu_* token from OpenClaw auth-profiles.
 * This mirrors how OpenClaw agents auto-resolve their GitHub Copilot tokens.
 */
async function findGhuTokenFromAuthProfiles(): Promise<string | null> {
  const home = process.env.HOME ?? process.env.USERPROFILE ?? "";
  const profilePaths = [
    path.join(home, ".openclaw", "agents", "main", "agent", "auth-profiles.json"),
    path.join(home, ".openclaw", "auth-profiles.json"),
  ];

  for (const p of profilePaths) {
    try {
      const raw = await fs.readFile(p, "utf-8");
      const data = JSON.parse(raw) as {
        profiles?: Record<string, { token?: string; type?: string; provider?: string }>;
      };
      if (data.profiles) {
        for (const profile of Object.values(data.profiles)) {
          if (
            profile.provider === "github-copilot" &&
            typeof profile.token === "string" &&
            profile.token.startsWith("ghu_")
          ) {
            return profile.token;
          }
        }
      }
    } catch {
      // Fichier absent ou invalide — continuer
    }
  }
  return null;
}

/**
 * Read a cached token from a credential file.
 */
async function readCachedTokenFile(filePath: string): Promise<CopilotTokenCache | null> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(raw) as CopilotTokenCache;
    if (typeof data.token === "string" && typeof data.expiresAt === "number") {
      return data;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Write a token to the credential cache file.
 */
async function writeCachedTokenFile(filePath: string, token: CopilotTokenCache): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(token, null, 2), "utf-8");
}

/**
 * Exchange a GitHub token (ghu_*) for a Copilot API token.
 */
async function exchangeGitHubToken(githubToken: string): Promise<CopilotTokenCache> {
  const res = await fetch(COPILOT_TOKEN_EXCHANGE_URL, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${githubToken}`,
      "Editor-Version": EDITOR_VERSION,
      "User-Agent": USER_AGENT,
      "X-Github-Api-Version": API_VERSION,
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub Copilot token exchange failed (${res.status}): ${body.slice(0, 200)}`);
  }

  const data = (await res.json()) as CopilotTokenExchangeResponse;
  const expiresAt = data.expires_at > 1e12 ? data.expires_at : data.expires_at * 1000;

  return {
    token: data.token,
    expiresAt,
    updatedAt: Date.now(),
  };
}

/**
 * Resolve a valid Copilot API token.
 *
 * Resolution order:
 * 1. In-memory cache (if still valid)
 * 2. Explicit GITHUB_COPILOT_TOKEN env var
 * 3. Credential file (configPath or default ~/.openclaw/credentials/)
 * 4. GitHub token exchange (GITHUB_TOKEN env var) — fallback only
 *
 * Returns the raw token string and the API base URL.
 */
export async function resolveCopilotToken(config: Record<string, unknown>): Promise<{
  token: string;
  baseUrl: string;
}> {
  // Check in-memory cache first
  if (cachedToken && isTokenUsable(cachedToken)) {
    return {
      token: cachedToken.token,
      baseUrl: extractBaseUrl(cachedToken.token),
    };
  }

  const env = (config.env ?? {}) as Record<string, string>;
  const credentialPath = typeof config.credentialPath === "string" ? config.credentialPath : null;

  // 1. Explicit Copilot token
  const explicitToken = env.GITHUB_COPILOT_TOKEN || process.env.GITHUB_COPILOT_TOKEN;
  if (explicitToken) {
    const fields = parseTokenFields(explicitToken);
    const exp = fields.exp ? Number(fields.exp) * 1000 : Date.now() + 30 * 60 * 1000;
    cachedToken = { token: explicitToken, expiresAt: exp, updatedAt: Date.now() };
    return { token: explicitToken, baseUrl: extractBaseUrl(explicitToken) };
  }

  // 2. Credential file (check BEFORE token exchange to avoid 404 on non-Copilot PATs)
  const pathsToCheck = credentialPath ? [credentialPath] : defaultCredentialPaths();
  for (const p of pathsToCheck) {
    const cached = await readCachedTokenFile(p);
    if (cached && isTokenUsable(cached)) {
      cachedToken = cached;
      return { token: cached.token, baseUrl: extractBaseUrl(cached.token) };
    }
  }

  // 3. GitHub token exchange — check config.githubToken first (like OpenClaw auth-profiles),
  //    then fall back to env var. This enables automatic token renewal without env vars.
  const githubToken =
    (typeof config.githubToken === "string" && config.githubToken.startsWith("ghu_") ? config.githubToken : null)
    ?? env.GITHUB_TOKEN
    ?? process.env.GITHUB_TOKEN;
  if (githubToken && githubToken.startsWith("ghu_")) {
    try {
      cachedToken = await exchangeGitHubToken(githubToken);
      const cachePath = credentialPath ?? defaultCredentialPaths()[0];
      await writeCachedTokenFile(cachePath, cachedToken).catch(() => {});
      return { token: cachedToken.token, baseUrl: extractBaseUrl(cachedToken.token) };
    } catch {
      // Token exchange failed — fall through
    }
  }

  // 4. Auto-discover ghu_* from OpenClaw auth-profiles (like Albert does)
  const discoveredGhu = await findGhuTokenFromAuthProfiles();
  if (discoveredGhu) {
    try {
      cachedToken = await exchangeGitHubToken(discoveredGhu);
      const cachePath = credentialPath ?? defaultCredentialPaths()[0];
      await writeCachedTokenFile(cachePath, cachedToken).catch(() => {});
      return { token: cachedToken.token, baseUrl: extractBaseUrl(cachedToken.token) };
    } catch {
      // Discovery exchange failed — fall through to error
    }
  }

  throw new Error(
    "No valid GitHub Copilot token found. Set GITHUB_COPILOT_TOKEN, " +
    "or ensure a valid token exists at ~/.openclaw/credentials/github-copilot.token.json. " +
    "GITHUB_TOKEN exchange only works with Copilot OAuth tokens (ghu_*).",
  );
}

/**
 * Get Copilot request headers for API calls.
 */
export function getCopilotHeaders(token: string): Record<string, string> {
  return {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
    "Editor-Version": EDITOR_VERSION,
    "User-Agent": USER_AGENT,
    "X-Github-Api-Version": API_VERSION,
    "Openai-Intent": "conversation-edits",
  };
}

/**
 * Fetch Copilot usage/quota information.
 */
export async function fetchCopilotUsage(githubToken: string): Promise<{
  premiumRemaining: number | null;
  chatRemaining: number | null;
  plan: string | null;
}> {
  try {
    const res = await fetch("https://api.github.com/copilot_internal/user", {
      headers: {
        "Authorization": `token ${githubToken}`,
        "Editor-Version": EDITOR_VERSION,
        "User-Agent": USER_AGENT,
        "X-Github-Api-Version": API_VERSION,
      },
    });
    if (!res.ok) return { premiumRemaining: null, chatRemaining: null, plan: null };
    const data = (await res.json()) as {
      quota_snapshots?: {
        premium_interactions?: { percent_remaining?: number };
        chat?: { percent_remaining?: number };
      };
      copilot_plan?: string;
    };
    return {
      premiumRemaining: data.quota_snapshots?.premium_interactions?.percent_remaining ?? null,
      chatRemaining: data.quota_snapshots?.chat?.percent_remaining ?? null,
      plan: data.copilot_plan ?? null,
    };
  } catch {
    return { premiumRemaining: null, chatRemaining: null, plan: null };
  }
}
