import { NextResponse } from "next/server";
import { categories } from "../../../data/prompts";

export async function GET() {
  return NextResponse.json(categories);
}
