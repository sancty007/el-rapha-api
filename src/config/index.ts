import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGIN: ['lien de notre frontend'],
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  database: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;
