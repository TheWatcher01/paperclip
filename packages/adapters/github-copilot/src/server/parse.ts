import type { UsageSummary } from "@paperclipai/adapter-utils";

// ---------------------------------------------------------------------------
// Parse GitHub Copilot API responses
// ---------------------------------------------------------------------------

export interface ParsedCopilotResponse {
  usage: UsageSummary;
  model: string;
  assistantContent: string | null;
}

/**
 * Parse the accumulated text content from the SSE stream.
 * The SSE stream has already been processed — this just wraps
 * the accumulated text into a structured response.
 */
export function parseCopilotResponse(
  accumulatedText: string,
  requestedModel: string,
): ParsedCopilotResponse {
  // Estimation grossiere des tokens — l'API SSE ne rapporte pas toujours les usage
  const estimatedOutputTokens = Math.ceil(accumulatedText.length / 4);

  return {
    usage: {
      inputTokens: 0, // Non rapporte dans le stream SSE
      outputTokens: estimatedOutputTokens,
    },
    model: requestedModel,
    assistantContent: accumulatedText.length > 0 ? accumulatedText : null,
  };
}

/**
 * Parse a non-streaming JSON response from the Copilot API.
 * Used as fallback when streaming is disabled.
 */
export function parseNonStreamingResponse(
  responseBody: string,
): ParsedCopilotResponse {
  try {
    const data = JSON.parse(responseBody) as {
      choices?: Array<{ message?: { content?: string } }>;
      model?: string;
      usage?: {
        prompt_tokens?: number;
        completion_tokens?: number;
        cached_tokens?: number;
      };
    };

    const content = data.choices?.[0]?.message?.content ?? null;
    const usage: UsageSummary = {
      inputTokens: data.usage?.prompt_tokens ?? 0,
      outputTokens: data.usage?.completion_tokens ?? 0,
      cachedInputTokens: data.usage?.cached_tokens,
    };

    return {
      usage,
      model: data.model ?? "",
      assistantContent: content,
    };
  } catch {
    return {
      usage: { inputTokens: 0, outputTokens: 0 },
      model: "",
      assistantContent: null,
    };
  }
}
