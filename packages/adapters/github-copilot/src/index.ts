export const type = "github_copilot";
export const label = "GitHub Copilot";

export const models = [
  { id: "gpt-5.4-mini", label: "GPT-5.4 Mini" },
  { id: "gpt-5.4", label: "GPT-5.4" },
  { id: "gpt-4.1", label: "GPT-4.1" },
  { id: "gpt-5-mini", label: "GPT-5 Mini" },
  { id: "claude-opus-4.6", label: "Claude Opus 4.6" },
  { id: "claude-sonnet-4.6", label: "Claude Sonnet 4.6" },
  { id: "claude-haiku-4.5", label: "Claude Haiku 4.5" },
  { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
  { id: "o3", label: "o3" },
  { id: "o4-mini", label: "o4-mini" },
];

export const agentConfigurationDoc = `# github_copilot agent configuration

Adapter: github_copilot

Executes agent tasks via the GitHub Copilot API (OpenAI-compatible proxy).
Uses the GitHub Copilot subscription token for authentication.

## Token resolution

The adapter resolves the Copilot API token in this order:
1. Agent env var GITHUB_COPILOT_TOKEN (explicit token string)
2. Agent env var GITHUB_TOKEN (GitHub personal access token — exchanged for Copilot token)
3. Credential file at OPENCLAW_STATE_DIR/credentials/github-copilot.token.json
4. Default credential file at ~/.openclaw/credentials/github-copilot.token.json

When a GitHub token (ghu_*) is provided, the adapter exchanges it for a Copilot API token
via https://api.github.com/copilot_internal/v2/token.

## Core fields

- model (string, optional): model id (e.g. gpt-5.4-mini, claude-sonnet-4.6). Default: gpt-5.4-mini
- systemPrompt (string, optional): system prompt for the conversation
- promptTemplate (string, optional): run prompt template with {{variable}} substitution
- maxTokens (number, optional): max output tokens (default: 8192)
- temperature (number, optional): sampling temperature (default: 0.7)

## Credential fields

- env.GITHUB_COPILOT_TOKEN (string, optional): explicit Copilot API token
- env.GITHUB_TOKEN (string, optional): GitHub token for auto-exchange
- credentialPath (string, optional): path to github-copilot.token.json

## Reasoning effort

- reasoningEffort (string, optional): reasoning effort level for o-series and compatible models
  Supported values: minimal, low, medium, high, max
  Applies to: o3, o4-mini, and other models supporting reasoning_effort parameter

## Operational fields

- timeoutSec (number, optional): HTTP request timeout in seconds (default: 300)

## Notes

- The adapter calls the Copilot API directly (no CLI required).
- Supports all models available through GitHub Copilot (GPT, Claude, Gemini, o-series).
- Token auto-refresh: cached tokens are reused until 5 minutes before expiration.
- Cost is $0 (included in GitHub Copilot subscription).
`;
