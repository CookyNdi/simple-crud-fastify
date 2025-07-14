import 'dotenv/config';
import { type Config } from 'drizzle-kit';
import { env } from './src/utils';

export default {
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
} satisfies Config;
