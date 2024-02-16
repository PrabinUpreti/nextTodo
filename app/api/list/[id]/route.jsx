import List from "@/models/list";
import connection from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newItem: item, newDecription: decription } = await req.json();
  await connection();
  await List.findByIdAndUpdate(id, { item, decription });
  return NextResponse.json({ message: "List updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  console.log(req);
  const { id } = params;
  await connection();
  const list = await List.findOne({ _id: id });
  return NextResponse.json({ list }, { status: 200 });
}
