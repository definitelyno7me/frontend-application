import { NextRequest, NextResponse } from "next/server";

const leads = [
  {
    id: 1,
    firstName: "Jorge",
    lastName: "Ruiz",
    email: "jorge.ruix@example.com",
    status: "PENDING",
  },
];

export async function GET() {
  return NextResponse.json(leads);
}

export async function POST(request: NextRequest) {
  const newLead = await request.json();
  newLead.id = leads.length + 1;
  leads.push(newLead);
  return NextResponse.json(newLead, { status: 201 });
}
