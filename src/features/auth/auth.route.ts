import { Router } from 'express';
import { AuthController } from './auth.controlleurs';
import { authenticateToken } from '../../middlewares/auth.middlewares';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.get('/profile', authenticateToken, AuthController.getProfile);

export default router;
