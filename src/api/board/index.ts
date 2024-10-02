import { IBoardCreateRequest, IBoardEditRequest, IBoardSearchRequest } from './interfaces/request';
import { IResp, IRespPagination, IResponse } from 'api/common.interface';
import { IBoardSearchSchema, IPostDetailsSchema } from './interfaces/response';
import axios from 'utils/axios';

export const getBoard = async (req: IBoardSearchRequest) => {
  try {
    const res = await axios.get<IBoardSearchRequest, IResponse<IRespPagination<IBoardSearchSchema>>>(`/board`, { params: req });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getPostDetail = async (postId: number) => {
  try {
    const res = await axios.get<number, IResponse<IPostDetailsSchema>>(`/board/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (req: IBoardCreateRequest) => {
  try {
    const res = await axios.post<IBoardCreateRequest, IResp>(`/board`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const editPost = async (req: IBoardEditRequest) => {
  try {
    const res = await axios.put<IBoardEditRequest, IResp>(`/board`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const res = await axios.delete<number, IResp>(`/board/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
