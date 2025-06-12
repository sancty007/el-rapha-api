import express, { Request, Response } from 'express';
import config from './config';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT} in ${config.NODE_ENV} mode`);
});
