import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
// import { AIOutPut } from './schema'; 
import * as schema from './schema'

const connectionString: string | undefined = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

if (!connectionString) {
  throw new Error('NEXT_PUBLIC_DRIZZLE_DB_URL is not set in the environment variables');
}

const client = postgres(connectionString);


// async function fetchUsers() {
//     const allAIPrompts = await db.select().from(AIOutPut);
//     return allAIPrompts;
// }

// fetchUsers()
// .then(users => console.log(users))
// .catch(err => console.error('Error fetching users:', err));

export const db = drizzle(client, {schema});