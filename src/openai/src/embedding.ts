import { OpenAIApi } from "openai";

export type EMBEDDING_MODEL = "text-embedding-ada-002";

export async function createAnEmbedding(
  openAI: OpenAIApi,
  text: string,
  model: EMBEDDING_MODEL
) {
  const response = await openAI.createEmbedding({
    input: text,
    model: model,
  });

  return response.data.data;
}

export function computeSimilarity(
  embeddings: Array<number>,
  embeddings2: Array<number>
) {
  return cosineSimilarity(embeddings2, embeddings);
}

function cosineSimilarity(array1: Array<number>, array2: Array<number>) {
  let dotProduct = 0;
  let pArray1 = 0;
  let pArray2 = 0;
  for (let iter = 0; iter < array1.length; iter++) {
    dotProduct += array1[iter] * array2[iter];
    pArray1 += array1[iter] * array1[iter];
    pArray2 += array2[iter] * array2[iter];
  }
  return dotProduct / (Math.sqrt(pArray1) * Math.sqrt(pArray2));
}
