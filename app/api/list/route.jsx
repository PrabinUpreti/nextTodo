import connection from "@/lib/mongodb";
import List from "@/models/list";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { item, decription } = await req.json();
  await connection();
  await List.create({ item, decription });
  return NextResponse.json({ message: "Saved" }, { status: 201 });
}
export async function GET() {
  await connection();
  const lists = await List.find();
  return NextResponse.json({ lists });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connection();
  await List.findByIdAndDelete(id);
  return NextResponse.json({ message: "List deleted" }, { status: 200 });
}
