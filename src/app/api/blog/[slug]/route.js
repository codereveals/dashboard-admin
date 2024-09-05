import { Post } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const {username} = params;

  try {
    connectToDb();
    const post = await Post.findOne({username});
    return NextResponse.json(post);
  } catch (error) {
    console.log("Something Went Wrong!!!");
  }
};
