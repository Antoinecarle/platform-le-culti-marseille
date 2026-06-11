import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Base de données non branchée. Ajoute une DB PostgreSQL Railway puis configure DATABASE_URL." },
    { status: 503 },
  );
}

export async function GET() {
  return NextResponse.json(
    { error: "Base de données non branchée. Ajoute une DB PostgreSQL Railway puis configure DATABASE_URL." },
    { status: 503 },
  );
}
