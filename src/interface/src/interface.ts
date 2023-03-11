import { STATUS } from "./types";

export interface IResponse<TData = unknown, TStatus = STATUS> {
  status: TStatus;
  data?: TData;
  message?: TStatus extends "SUCCESS" ? never : string;
}
