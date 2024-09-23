import axios from 'utils/axios';
import { IAuthLoginRequest } from './intefaces/request';
import { IResponse } from 'api/common.interface';
import { IAuthLoginResponse } from './intefaces/response';

export const login = async (req: IAuthLoginRequest) => {
  try {
    const res = await axios.post<IAuthLoginRequest, IResponse<IAuthLoginResponse>>(`/auth/login`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};
