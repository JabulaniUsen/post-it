import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const aiOutPut = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt')
});

export const payments = pgTable('payments', {
  id: varchar('id', { length: 255 }).primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  reference: varchar('reference', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});