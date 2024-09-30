export interface IResp {
  statusCode: number;
  statusText: string;
  message: string;
}

export interface IResponse<T> extends IResp {
  result: T;
}

export interface IRespPagination<T> {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  data: T[];
}
