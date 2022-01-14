export interface User {
  email: string;
  role: string;
  id: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RequestError {
  data: any;
  status: number;
}

export type TLayout = {
  title: string;
  children: any;
};

export type AuthState = {
  user: User | null;
  token: string | null;
};
