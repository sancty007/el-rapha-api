import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGIN: ['https://el-rapha-admin.vercel.app/', 'https://el-rapha-web.vercel.app/'],
  LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
};

export default config;
