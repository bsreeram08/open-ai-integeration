import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { generateImage } from "./generate_image";
import {
  EMBEDDING_MODEL,
  computeSimilarity,
  createAnEmbedding,
} from "./embedding";
import { generateTokensForText, decodeTokensToText } from "./text_token";
import { chatGPT3_5 } from "./chat";

export function openAI(configuration: Configuration) {
  const openAI = new OpenAIApi(configuration);
  return {
    api: openAI,
    embeddings: {
      createEmbedding: (prompt: string, model: EMBEDDING_MODEL) =>
        createAnEmbedding(openAI, prompt, model),
      computeSimilarity: (
        embedding: Array<number>,
        embeddings2: Array<number>
      ) => computeSimilarity(embedding, embeddings2),
    },
    generateImage: (prompt: string, noOfImages = 1) =>
      generateImage(openAI, prompt, noOfImages),
    tokens: { generateTokensForText, decodeTokensToText },
    chat: {
      chatGPT: (messages: Array<ChatCompletionRequestMessage>, asSSE = false) =>
        chatGPT3_5(openAI, messages, asSSE),
    },
  };
}

export type OpenAiAPI = ReturnType<typeof openAI>;
