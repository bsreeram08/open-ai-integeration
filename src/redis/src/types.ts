import { Cluster, Redis } from "ioredis";

export type ALLOWED_IN_REDIS = string | number | Buffer;
export type RedisType = Redis | Cluster;
