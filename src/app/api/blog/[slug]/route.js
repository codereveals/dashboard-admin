import { Post } from "@/models/user";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {
    const {slug} = params;

  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    console.log("Something Went Wrong!!!");
  }
};
