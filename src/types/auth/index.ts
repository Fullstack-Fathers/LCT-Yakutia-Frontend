export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignResponse {
  accessToken: string;
  statusCode: number;
  message: string;
}
