import type { ModelProviderConfig } from "openclaw/plugin-sdk/provider-model-shared";

const NVIDIA_BASE_URL = "https://integrate.api.nvidia.com/v1";
const NVIDIA_DEFAULT_MODEL_ID = "nvidia/minimaxai/minimax-m2.1";
const NVIDIA_DEFAULT_CONTEXT_WINDOW = 131072;
const NVIDIA_DEFAULT_MAX_TOKENS = 8192;
const NVIDIA_DEFAULT_COST = {
  input: 0,
  output: 0,
  cacheRead: 0,
  cacheWrite: 0,
};

export function buildNvidiaProvider(): ModelProviderConfig {
  return {
    baseUrl: NVIDIA_BASE_URL,
    api: "openai-completions",
    models: [
      {
        id: NVIDIA_DEFAULT_MODEL_ID,
        name: "MiniMax M2.1",
        reasoning: true,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 1000000,
        maxTokens: NVIDIA_DEFAULT_MAX_TOKENS,
      },
      {
        id: "nvidia/meta/llama-3.2-11b-vision-instruct",
        name: "Meta Llama 3.2 11B Vision Instruct",
        reasoning: false,
        input: ["text", "image"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 128000,
        maxTokens: 4096,
      },
      {
        id: "nvidia/meta/llama-3.3-70b-instruct",
        name: "Meta Llama 3.3 70B Instruct",
        reasoning: false,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 131072,
        maxTokens: 4096,
      },
      {
        id: "deepseek-ai/deepseek-v3.1",
        name: "DeepSeek V3.1",
        reasoning: true,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 131072,
        maxTokens: 8192,
      },
      {
        id: "nvidia/meta/llama-3.2-3b-instruct",
        name: "Meta Llama 3.2 3B Instruct",
        reasoning: false,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 128000,
        maxTokens: 2048,
      },
      {
        id: "nvidia/google/gemma-2-9b-it",
        name: "Google Gemma 2 9B Instruct",
        reasoning: false,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 8192,
        maxTokens: 8192,
      },
      {
        id: "nvidia/mistralai/mixtral-8x7b-instruct-v0.1",
        name: "Mistral Mixtral 8x7B Instruct",
        reasoning: false,
        input: ["text"],
        cost: NVIDIA_DEFAULT_COST,
        contextWindow: 32768,
        maxTokens: 4096,
      },
    ],
  };
}
