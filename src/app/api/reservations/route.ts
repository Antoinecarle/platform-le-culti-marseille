import { NextResponse } from "next/server";
import { ensureSchema, pool } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, date, time, party_size, email = null, phone = null, notes = null } = body;

    if (!name || !date || !time || !party_size) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    await ensureSchema();

    const result = await pool.query(
      `INSERT INTO reservations (name, email, phone, date, time, party_size, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, email, phone, date, time, Number(party_size), notes],
    );

    return NextResponse.json({ reservation: result.rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Impossible de créer la réservation" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureSchema();
    const result = await pool.query(`SELECT * FROM reservations ORDER BY created_at DESC LIMIT 50`);
    return NextResponse.json({ reservations: result.rows });
    } catch {
    return NextResponse.json({ error: "Impossible de charger les réservations" }, { status: 500 });
  }
}
