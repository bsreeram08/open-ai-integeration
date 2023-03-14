export const environment = {
  production: process.env.NODE_ENV === "production",
  apiKey: process.env.OPEN_AI_API_KEY,
  organization: process.env.OPEN_AI_ORGANIZATION,
  redisSecrets: {
    redisHost: process.env.REDIS_HOST ?? "127.0.0.1",
    redisPort: parseInt(process.env.REDIS_PORT ?? "6379"),
  },
} as const;
