import { Configuration } from "openai";
import { openAI } from "./openai";
import { redis } from "./redis";
import { environment } from "./environment/environment";
import { prompts } from "./prompt";

export async function bootstrapEmbeddings() {
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

  const embeddings = await Promise.all(
    prompts.map(async (prompt) => {
      const tokenRequired = openAiAPI.tokens.generateTokensForText(prompt);
      let embeddings: Array<number>;
      if (!(await db.embeddings.exists(prompt))) {
        console.log(
          `Prompt is going to use ${tokenRequired.data?.length} Tokens`
        );
        const response = await openAiAPI.embeddings.createEmbedding(
          prompt,
          "text-embedding-ada-002"
        );
        db.embeddings.store(prompt, response[0].embedding);
        embeddings = response[0].embedding;
      } else {
        console.log(
          `Prompt just saved you ${tokenRequired.data?.length} Tokens`
        );
        embeddings = await db.embeddings.get(prompt);
      }
      return { embeddings, prompt };
    })
  );

  const question = "What are terminals?";
  const questionEmbedding = (
    await openAiAPI.embeddings.createEmbedding(
      question,
      "text-embedding-ada-002"
    )
  )[0].embedding;
  const cosineSimilarities = embeddings
    .map((embedding, index) => {
      return {
        index,
        prompt: embedding.prompt,
        value: openAiAPI.embeddings.computeSimilarity(
          questionEmbedding,
          embedding.embeddings
        ),
      };
    })
    .sort((v1, v2) => v2.value - v1.value);
  console.log(cosineSimilarities.map((v) => v.prompt)[0]);
}
