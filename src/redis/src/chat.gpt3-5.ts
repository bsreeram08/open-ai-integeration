import { ChatCompletionRequestMessage } from "openai";
import { RedisType } from "./types";
export async function chatMessages(redis: RedisType, chatId: string) {
  return (await redis.lrange(chatId, 0, -1)).map(
    (v) => JSON.parse(v) as unknown as ChatCompletionRequestMessage
  );
}

export async function addAssistantMessage(
  redis: RedisType,
  chatId: string,
  messages: Array<ChatCompletionRequestMessage>
) {
  return await redis.rpush(chatId, ...messages.map((v) => JSON.stringify(v)));
}

export const addUserMessage = addAssistantMessage;
