export interface IGetCommentRequest {
  postId: number;
  pageSize?: number;
  pageCurrent?: number;
}

export interface ICreateCommentRequest {
  postId: number;
  description: string;
}

export interface IEditCommentRequest {
  commentId: number;
  description: string;
}
