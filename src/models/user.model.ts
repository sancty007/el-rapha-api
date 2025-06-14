export interface User {
  id: number;
  email: string;
  name?: string | null;
  roleId: number;
  password: string;
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
  userId: number;
  iat?: number;
  exp?: number;
}
