import dotenv from 'dotenv';

import { startServer } from '@/server';
import { env } from '@/utils';
dotenv.config();

if (process.env.NODE_ENV === 'production') {
  const missingEnv = Object.entries(env)
    .filter(([_, value]) => value === '' || value === undefined)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    throw new Error(`Missing environment variables: ${missingEnv.join(', ')}`);
  }
}

startServer(env.PORT, env.HOST)
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`);
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
  });
