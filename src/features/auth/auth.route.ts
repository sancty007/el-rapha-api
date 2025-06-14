import { Router, Request, Response } from 'express';

import { authenticateToken } from '../../middlewares/auth.middlewares';
import { AuthController } from './auth.controllers';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.get('/profile', authenticateToken, AuthController.getProfile);

router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Auth routes are working!', timestamp: new Date() });
});
export default router;
