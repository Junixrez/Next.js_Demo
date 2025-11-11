import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";

dbConnection();

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!body.name && !body.email) {
      return NextResponse.json(
        { error: "At least one field (name or email) is required" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json({ updatedUser }, { status: 200 });
  } catch (err) {
    console.error("Error updating user:", err);

    if (err.code === 11000) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
