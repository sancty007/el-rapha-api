import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import config from './config';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import router from './features/auth/auth.route';
import { logger } from './lib/winston';

const app = express();
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (config.NODE_ENV === 'development' || !origin || config.WHITELIST_ORIGIN.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS Error:${origin} is not allowed by cors`), false);
      console.log(`CORS Error:${origin} is not allowed by cors`);
    }
  },
};
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
