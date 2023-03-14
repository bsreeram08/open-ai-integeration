import { Configuration } from "openai";
import { environment } from "./environment/environment";
import { redis } from "./redis";
import { openAI } from "./openai";
import { chat } from "./cli";

export async function bootstrapChat() {
  const configuration = new Configuration({
    apiKey: environment.apiKey,
    organization: environment.organization,
  });
  const openAiAPI = await openAI(configuration);
  const db = redis({
    redis: {
      host: environment.redisSecrets.redisHost,
      port: environment.redisSecrets.redisPort,
    },
  });
  chat(openAiAPI, db);
}
