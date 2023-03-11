export const environment = {
  production: process.env.NODE_ENV === "production",
  apiKey: process.env.OPEN_AI_API_KEY,
  organization: process.env.OPEN_AI_ORGANIZATION,
} as const;
