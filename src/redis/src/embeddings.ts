import { Redis } from "ioredis";
import { ALLOWED_IN_REDIS, RedisType } from "./types";

export function storeEmbeddings(
  redis: RedisType,
  key: string,
  elements: Array<ALLOWED_IN_REDIS>
) {
  return redis.rpush(key, ...elements);
}

export async function getEmbeddings(redis: RedisType, key: string) {
  return (await redis.lrange(key, 0, -1)).map((v) => parseFloat(v));
}
