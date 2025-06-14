import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/auth';
import { AuthService } from '../core/auth/auth.service';
import { User } from '../models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: Omit<User, 'password'>;
    }
  }
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      res.status(403).json({ error: 'Invalid or expired token' });
      return;
    }

    const user = await AuthService.getUserById(decoded.userId);

    if (!user) {
      res.status(403).json({ error: 'User not found' });
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
