import { NextResponse } from "next/server";
import { baseCategories } from "../../../data/prompts";

export async function GET() {
  return NextResponse.json(baseCategories);
}
