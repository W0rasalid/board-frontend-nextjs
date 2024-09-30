import axios from 'utils/axios';
import { ICreateCommentRequest, IEditCommentRequest, IGetCommentRequest } from './interfaces/request';
import { IResp, IRespPagination, IResponse } from 'api/common.interface';
import { ICommentSearchResponse } from './interfaces/response';

export const getCommentList = async (req: IGetCommentRequest) => {
  try {
    const res = await axios.get<IGetCommentRequest, IResponse<IRespPagination<ICommentSearchResponse>>>(`/comment`, { params: req });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (req: ICreateCommentRequest) => {
  try {
    const res = await axios.post<ICreateCommentRequest, IResp>(`/comment`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editComment = async (req: IEditCommentRequest) => {
  try {
    const res = await axios.put<IEditCommentRequest, IResp>(`/comment`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const res = await axios.delete<number, IResp>(`/comment/${commentId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
