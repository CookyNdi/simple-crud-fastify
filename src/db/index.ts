import { drizzle } from 'drizzle-orm/node-postgres';
import 'dotenv/config';

import { env } from '@/utils';

const db = drizzle({
  connection: {
    connectionString: env.DATABASE_URL!,
  },
});

export default db;
