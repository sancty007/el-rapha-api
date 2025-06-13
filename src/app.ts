import express, { Request, Response } from 'express';
import helmet from 'helmet';
import config from './config';
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

app.get('/api/v1/test', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

export default app;
