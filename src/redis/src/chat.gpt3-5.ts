import { CreateSearchRequest, OpenAIApi } from "openai";
export function createChatCompletion(openAI: OpenAIApi, prompt: string) {
  openAI.createChatCompletion({
    messages: [
      {
        content: "Hey, what is up my friend?",
        role: "user",
        name: "Sreeram",
      },
      {
        content: "What do you want to know about dude?",
        role: "assistant",
        name: "SRB_BOT",
      },
      {
        content: "I want to know what the cat is drinking?",
        role: "user",
        name: "Sreeram",
      },
    ],
    model: "text-davinci-003",
    temperature: 0,
  });
}
