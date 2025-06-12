import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGIN: ['lien de notre frontend'],
};

export default config;
