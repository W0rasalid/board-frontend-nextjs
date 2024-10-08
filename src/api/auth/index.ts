import axios from 'utils/axios';
import { IAuthLoginRequest, IGoogleSignInRequest } from './intefaces/request';
import { IResponse } from 'api/common.interface';
import { IAuthLoginResponse, IAuthMeResponse } from './intefaces/response';

export const login = async (req: IAuthLoginRequest) => {
  try {
    const res = await axios.post<IAuthLoginRequest, IResponse<IAuthLoginResponse>>(`/auth/login`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const authMe = async () => {
  try {
    const res = await axios.get<undefined, IResponse<IAuthMeResponse>>(`/auth/me`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const googleSignIn = async (req: IGoogleSignInRequest) => {
  try {
    const res = await axios.post<IGoogleSignInRequest, IResponse<IAuthLoginResponse>>(`/auth/google-signin`, req);
    return res.data;
  } catch (error) {
    throw error;
  }
};
