import { User } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.log("Something Went Wrong!!!");
  }
};
