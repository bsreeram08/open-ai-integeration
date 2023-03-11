import { CreateImageRequestSizeEnum, OpenAIApi } from "openai";
import { IResponse } from "../../interface";

export async function generateImage(
  openAI: OpenAIApi,
  prompt: string,
  noOfImages: number
): Promise<IResponse<string>> {
  const response = await openAI.createImage({
    prompt: prompt,
    n: noOfImages,
    size: CreateImageRequestSizeEnum._1024x1024,
  });
  console.log(response);
  return { data: response.data.data[0].url, status: "SUCCESS" };
}
