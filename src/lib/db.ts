import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL manquante");
}

export const pool = new Pool({ connectionString });

export async function ensureSchema() {
  await pool.query(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    CREATE TABLE IF NOT EXISTS reservations (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text,
      phone text,
      date date NOT NULL,
      time text NOT NULL,
      party_size int NOT NULL DEFAULT 2,
      allergies text,
      notes text,
      created_at timestamptz DEFAULT now()
    );
  `);
}
