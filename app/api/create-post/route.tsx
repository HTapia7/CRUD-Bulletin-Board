import { NextRequest } from "next/server";
import dbConnect from "@/libs/db";
import Note from "@/model/bulletin";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { title, message, link } = await req.json();

    const newNote = await Note.create({ title, message, link });

    return new Response(JSON.stringify(newNote), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating note:", error);
    return new Response("Failed to create note", { status: 500 });
  }
}
