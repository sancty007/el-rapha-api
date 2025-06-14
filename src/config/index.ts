import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 3000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGIN: ['https://el-rapha-admin.vercel.app/', 'https://el-rapha-web.vercel.app/'],
  LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
  jwt: {
    secret:
      '8f7a9b2c1d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p',
    expiresIn: 1,
  },
};

export default config;
