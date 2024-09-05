"use server";

import { Post, User } from "@/models/user";
import { connectToDb } from "./connectToDb";
import { auth, signIn, signOut } from "./auth";
import { redirect } from "next/navigation";
import { Blog } from "@/models/blog";

export const addPost = async (formData) => {
  "use server";

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Save to Db");
  } catch (error) {
    console.log(error);
  }

  console.log(title, slug, desc, userId);
};

// Handle Login
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
// Handle Logout Session
export const handleLogout = async () => {
  await signOut({ redirectTo: "/login", redirect: true });
};

export const username = async () => {
  const session = await auth();
  const name = session?.user?.name;
  return name;
};

// Blog creation

export const writeBlog = async (formData) => {
  "use server";
  const { title, desc, slug, category, author } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newBlog = new Blog({
      title,
      desc,
      slug,
      category,
      author,
    });

    await newBlog.save();
    console.log("Save in Database!!!");
  } catch (error) {
    console.log(error);
  }
};


// Add User data 

export const addUserProfile = async (formData) => {
  "use server";
  const { username, email, firstName, lastName, roles, department, about, coverImage, country, streetAddress, city, state, postalCode, phone } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newuser = new User({
      username, email, firstName, lastName, roles, department, about, coverImage, country, streetAddress, city, state, postalCode, phone
    });

    await newuser.save();
    console.log("New User Save in Database!!!");
  } catch (error) {
    console.log(error);
  }
};