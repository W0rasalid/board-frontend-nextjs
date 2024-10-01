export interface IAuthLoginRequest {
  userName: string;
  email: string;
  password: string;
}

export interface IGoogleSignInRequest {
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  picture: string;
  sub: string;
}
