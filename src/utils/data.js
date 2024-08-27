import mongoose from "mongoose";
import { connectToDb } from "./connectToDb";
import { Post, User } from "@/models/user";

export const menuData = [
  {
    id: 1,
    name: "Dashboard",
    url: "",
    isSubmenu: false,
  },
  {
    id: 2,
    name: "Pages",
    isSubmenu: true,
    submenus: [
      { id: 22, name: "All Pages", url: "/all-pages" },
      { id: 23, name: "Create Page", url: "/add-page" },
    ],
  },
  {
    id: 3,
    name: "Posts",
    isSubmenu: true,
    submenus: [
      { id: 22, name: "All Posts", url: "/all-posts" },
      { id: 23, name: "Create Post", url: "/add-post" },
    ],
  },
  {
    id: 4,
    name: "Menu",
    isSubmenu: true,
    submenus: [
      { id: 22, name: "All Menu", url: "/all-Menus" },
      { id: 23, name: "Create Menu", url: "/add-menu" },
    ],
  },
  {
    id: 5,
    name: "Category",
    isSubmenu: true,
    submenus: [
      { id: 22, name: "All Category", url: "/all-categories" },
      { id: 23, name: "Create Category", url: "/add-category" },
    ],
  },
  {
    id: 6,
    name: "Blogs",
    url: "/blogs",
  },
];

// Data Section

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Something went Wrong in Posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Something went Wrong in Post!");
  }
};
export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Something went Wrong in Users!");
  }
};
export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Something went Wrong in User!");
  }
};
