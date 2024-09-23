export interface IResp {
  statusCode: number;
  statusText: string;
  message: string;
}

export interface IResponse<T> extends IResp {
  result: T;
}
