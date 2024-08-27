import { Post } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log("Something Went Wrong!!!");
  }
};
