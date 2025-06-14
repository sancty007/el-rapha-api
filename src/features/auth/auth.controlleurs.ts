import { Request, Response } from 'express';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../models/user.model';

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: Omit<User, 'password'>;
    }
  }
}

export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, name } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
      }

      const result = await AuthService.register({ email, password, name });
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
      }

      const result = await AuthService.login({ email, password });
      res.json(result);
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }

  static async getProfile(req: Request, res: Response): Promise<void> {
    res.json({ user: req.user });
  }
}
