import { ClusterNode, ClusterOptions, Redis, RedisOptions } from "ioredis";
import { ALLOWED_IN_REDIS } from "./types";
import { getEmbeddings, storeEmbeddings } from "./embeddings";
import {
  addAssistantMessage,
  addUserMessage,
  chatMessages,
} from "./chat.gpt3-5";
import { ChatCompletionRequestMessage } from "openai";

interface IOptions {
  redis?: RedisOptions;
  cluster?: { options: ClusterOptions; nodes: ClusterNode[] };
}

export function redis(option: IOptions) {
  if (!option.redis && !option.cluster)
    throw new Error("Please provide either redis or cluster options.");
  const redis = getRedis(option);
  return {
    embeddings: {
      store: (key: string, elements: Array<ALLOWED_IN_REDIS>) =>
        storeEmbeddings(
          redis,
          pathFramer(key.split(" ").join(":"), "embeddings"),
          elements
        ),
      get: (key: string) =>
        getEmbeddings(
          redis,
          pathFramer(key.split(" ").join(":"), "embeddings")
        ),
      exists: async (key: string) => {
        return (
          (await redis.exists(
            pathFramer(key.split(" ").join(":"), "embeddings")
          )) !== 0
        );
      },
    },
    chat: {
      messages: (chatId: string) => chatMessages(redis, chatId),
      addAssistantMessage: (
        chatId: string,
        messages: Array<ChatCompletionRequestMessage>
      ) => addAssistantMessage(redis, chatId, messages),
      addUserMessage: (
        chatId: string,
        messages: Array<ChatCompletionRequestMessage>
      ) => addUserMessage(redis, chatId, messages),
    },
  };
}

function getRedis(option: IOptions) {
  if (option.cluster)
    return new Redis.Cluster(option.cluster.nodes, option.cluster.options);
  if (option.redis) return new Redis(option.redis);
  /**
   * Redis must work locally if none of these options are set.
   */
  return new Redis();
}

function pathFramer(key: string, entity: "embeddings") {
  return `${entity}:${key}`;
}

export type RedisDB = ReturnType<typeof redis>;
