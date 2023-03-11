import { encode, decode } from "gpt-3-encoder";
import { IResponse } from "../../interface";

export function generateTokensForText(text: string): IResponse<Array<number>> {
  const tokens = encode(text);
  return {
    status: !!tokens ? "SUCCESS" : "ERROR",
    data: tokens,
  };
}

export function decodeTokensToText(tokens: Array<number>): IResponse<string> {
  const decoded = decode(tokens);
  return {
    status: !!decoded ? "SUCCESS" : "ERROR",
    data: decoded,
  };
}
