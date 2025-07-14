import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) ?? 5000,
  DATABASE_URL: process.env.DATABASE_URL ?? '',
  HOST: process.env.HOST ?? '127.0.0.1',
};
