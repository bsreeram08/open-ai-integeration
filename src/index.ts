/* import { bootstrapEmbeddings } from "./embeddings"; */

import { bootstrapChat } from "./chat";

export async function bootstrap() {
  /*   bootstrapEmbeddings(); */
  await bootstrapChat();
}

bootstrap();
