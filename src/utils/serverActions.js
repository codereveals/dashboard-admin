  "use server"

import { Post } from "@/models/user";
import { connectToDb } from "./connectToDb";
import { auth, signOut } from "./auth";


export const addPost = async (formData) => {
  "use server";
//   const title = formData.get("title");
//   const desc = formData.get("desc");
//   const userId = formData.get("userId");
//   const slug = formData.get("slug");

  const {title,desc,slug, userId} = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId
    })
    await newPost.save()
    console.log("Save to Db")
  } catch (error) {
    console.log(error)
  }

  console.log(title, slug, desc, userId);
};




// Handle Logout Session 
export const handleLogout = async ()=>{
  await signOut();
}

export const sessionData = async()=>{
  const session = await auth();
  console.log("session",session)
  return session;
}