import type { TranscriptEntry, CreateConfigValues } from "@paperclipai/adapter-utils";

// ---------------------------------------------------------------------------
// UI adapter for GitHub Copilot
// ---------------------------------------------------------------------------

/**
 * Parse a stdout line into TranscriptEntry[].
 */
export function parseGitHubCopilotStdoutLine(
  line: string,
  ts: string,
): TranscriptEntry[] {
  // Lignes de metadata adapter
  if (line.startsWith("[github_copilot]")) {
    return [{ kind: "system", ts, text: line }];
  }

  // Contenu assistant — tout le reste est du texte genere
  if (line.trim().length > 0) {
    return [{ kind: "assistant", ts, text: line, delta: true }];
  }

  return [];
}

/**
 * Build adapter config from UI form values.
 */
export function buildGitHubCopilotConfig(
  values: CreateConfigValues,
): Record<string, unknown> {
  const config: Record<string, unknown> = {};

  if (values.model) config.model = values.model;

  const schemaValues = values.adapterSchemaValues ?? {};
  if (schemaValues.systemPrompt) config.systemPrompt = schemaValues.systemPrompt;
  if (values.promptTemplate) config.promptTemplate = values.promptTemplate;
  if (schemaValues.maxTokens) config.maxTokens = Number(schemaValues.maxTokens);
  if (schemaValues.temperature) config.temperature = Number(schemaValues.temperature);
  if (schemaValues.reasoningEffort) config.reasoningEffort = schemaValues.reasoningEffort;
  if (schemaValues.timeoutSec) config.timeoutSec = Number(schemaValues.timeoutSec);
  if (schemaValues.credentialPath) config.credentialPath = schemaValues.credentialPath;
  if (values.envBindings && Object.keys(values.envBindings).length > 0) {
    config.env = values.envBindings;
  }

  return config;
}
