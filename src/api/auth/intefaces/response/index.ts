export interface IAuthLoginResponse {
  token: string;
}

export interface IAuthMeResponse {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
