import { NextResponse } from "next/server";
import { addContact } from "@/lib/google-sheet";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing Fields" },
        { status: 400 }
      );
    }

    await addContact(
      name,
      email,
      subject,
      message
    );

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}