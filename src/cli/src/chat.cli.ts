import { generateID } from "@jetit/id";
import { OpenAiAPI } from "../../openai";
import { RedisDB } from "../../redis";
import { ChatCompletionRequestMessage } from "openai";
import chalk from "chalk";
import { createInterface } from "readline";

export async function getChatResponse(
  openAiAPI: OpenAiAPI,
  redis: RedisDB,
  chatId?: string
): Promise<{
  chatId: string;
  assistanceResponses: Array<ChatCompletionRequestMessage>;
}> {
  const id = chatId ?? generateID("HEX");
  const chatMessages = await redis.chat.messages(id);
  if (chatMessages.length === 0) {
    return {
      chatId: id,
      assistanceResponses: [
        {
          content: "Hello, how may I assist you today?",
          role: "assistant",
          name: "Assistant",
        },
      ],
    };
  }
  const chatGptResponse = await openAiAPI.chat.chatGPT(chatMessages);
  const assistanceResponses: Array<ChatCompletionRequestMessage> =
    chatGptResponse.data.choices.map((v) => {
      return {
        content: v.message?.content ?? "No response from assistant",
        role: "assistant",
        name: "assistant",
      };
    });
  await redis.chat.addAssistantMessage(id, assistanceResponses);
  return { chatId: id, assistanceResponses };
}

export async function chat(openAiAPI: OpenAiAPI, redis: RedisDB) {
  const _chatId = await readLineAsync(
    `Existing chat id? [Enter "NEW" if  you don't have one] : `
  );
  const chatId = _chatId === "NEW" ? undefined : _chatId;
  const res = await getChatResponse(openAiAPI, redis, chatId);
  const id = res.chatId;
  console.log(chalk.green.bgBlue.bold(`Chat ID : ${res.chatId}`));
  const prevMessages = await redis.chat.messages(id);
  if (prevMessages.length > 0) {
    console.log(`Previous Chat.`);
    prevMessages.forEach(printChat);
  }
  while (1) {
    const question = await readLineAsync(`USER : `);
    if (!question)
      printChat({
        role: "system",
        content: "You must ask me something.",
      });
    else {
      redis.chat.addUserMessage(id, [
        {
          content: question,
          role: "user",
          name: "User",
        },
      ]);
      const response = await getChatResponse(openAiAPI, redis, id);
      response.assistanceResponses.forEach(printChat);
    }
  }
}

function readLineAsync(question: string) {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise<string>((resolve) => {
    readline.question(question, (input) => {
      resolve(input as string);
      readline.close();
    });
  });
}

function printChat(chat: ChatCompletionRequestMessage) {
  if (chat.role == "user")
    console.log(
      chalk.gray(chat.role.toUpperCase()),
      ":",
      chalk.white(chat.content)
    );
  else if (chat.role == "system")
    console.log(
      chalk.gray(chat.role.toUpperCase()),
      ":",
      chalk.red(chat.content)
    );
  else
    console.log(
      chalk.gray(chat.role.toUpperCase()),
      ":",
      chalk.green(chat.content)
    );
}
