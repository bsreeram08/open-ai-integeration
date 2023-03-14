import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export async function chatGPT3_5(
  openAI: OpenAIApi,
  messages: Array<ChatCompletionRequestMessage>,
  asSSE: boolean
) {
  return openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.2,
    n: 1,
    stream: asSSE,
  });
}
