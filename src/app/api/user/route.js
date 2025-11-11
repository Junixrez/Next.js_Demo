import { NextResponse } from "next/server";
import User from "@/lib/models/user";
import dbConnection from "@/lib/dbConnection";

dbConnection();

export async function GET() {
  try {
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const newUser = await User.create({ name, email });
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error adding user:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
