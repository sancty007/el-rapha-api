export interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserData {
  email: string;
  password: string;
  name?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
}

export interface JWTPayload {
  userId: string;
  iat?: number;
  exp?: number;
}
