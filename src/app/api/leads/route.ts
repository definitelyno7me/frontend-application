import { LeadType } from "@/types/lead";
import { NextRequest, NextResponse } from "next/server";

const leads: LeadType[] = [];

export async function GET() {
  return NextResponse.json(leads);
}

export async function POST(request: NextRequest) {
  const newLead = await request.json();
  newLead.id = leads.length + 1;
  leads.push(newLead);
  return NextResponse.json(newLead, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, status } = await request.json();

  const leadIndex = leads.findIndex((lead) => lead.id === id);
  if (leadIndex === -1) {
    return NextResponse.json({ message: "Lead not found" }, { status: 404 });
  }

  leads[leadIndex].status = status;
  return NextResponse.json(leads[leadIndex]);
}
