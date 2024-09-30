export interface IBoardSearchRequest {
  categoryId: number | null;
  keyword: string | null;
  pageSize?: number;
  pageCurrent?: number;
}

export interface IBoardCreateRequest {
  categoryId: number;
  title: string | null;
  description: string | null;
}

export interface IBoardEditRequest {
  postId: number;
  categoryId: number;
  title: string;
  description: string;
}
