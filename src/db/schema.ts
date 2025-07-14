import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const productTable = pgTable('product', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});
