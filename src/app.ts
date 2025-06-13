import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import config from './config';
import { logger } from './lib/winston';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// cors option config
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

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(helmet());

app.use(express.json());

app.get(`/api/v1/test`, (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy and running!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(), // Temps de fonctionnement du processus en secondes
  });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Unhandled request: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    status: 'fail',
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

export default app;
