import { CreateUserData, LoginData, AuthResponse } from '../../models/user.model';
import { registerUser, loginUser } from '../utils/auth';
import prisma from '../database/prisma';

export class AuthService {
  static async register(userData: CreateUserData): Promise<AuthResponse> {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    return await registerUser(userData);
  }

  static async login(loginData: LoginData): Promise<AuthResponse> {
    return await loginUser(loginData);
  }

  static async getUserById(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
