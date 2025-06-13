import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../database/prisma';
import config from '../../config/index';

import { CreateUserData, LoginData, AuthResponse, JWTPayload } from '../../models/user.model';

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string): string => {
  const payload = {
    userId,
  };

  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    return jwt.verify(token, config.jwt.secret) as JWTPayload;
  } catch (error) {
    return null;
  }
};

export const registerUser = async ({
  email,
  password,
  name,
}: CreateUserData): Promise<AuthResponse> => {
  try {
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token,
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }: LoginData): Promise<AuthResponse> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await comparePassword(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token,
    };
  } catch (error) {
    throw error;
  }
};
