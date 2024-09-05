import { User } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectToDb(); // Ensure the connection to the database is established
    const user = await User.findById(id); // Use `findById` if querying by MongoDB's `_id`
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Something Went Wrong!!!", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
