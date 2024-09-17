/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://postgres.xrwnyiimuhkhoexyyaip:uj_R2Yw5n*_Cz3N@aws-0-eu-central-1.pooler.supabase.com:6543/postgres',
    }
  };