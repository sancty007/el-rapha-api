import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import config from './config';
import { logger } from './lib/winston';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import router from './features/auth/auth.route';

const app = express();
const corsOptions: CorsOptions = {
  origin(
    origin: string | undefined | null,
    callback: (err: Error | null, allow?: boolean) => void,
  ) {
    const allowedOrigins = ['http://localhost:3000'];

    if (config.NODE_ENV === 'development' || !origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      const errorMsg = `CORS Error: ${origin} is not allowed by CORS`;
      logger.error(errorMsg);
      callback(new Error(errorMsg), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  maxAge: 86400,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  logger.error(err.message);
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
});

export default app;
