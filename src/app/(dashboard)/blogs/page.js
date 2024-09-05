import BlogCard from "@/app/components/BlogCard";
import { getPosts } from "@/utils/data";
import React from "react";

// With an API
const getData = async () => {
  const res = await fetch(`${process.env.DOMAIN_URL}/api/blog`);
  if (!res.ok) {
    throw new Error("Something Went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // const blogs = await getPosts();
  const blogs = await getData();

  return (
    <div className="bg-slate-50">
      <div className="grid md:grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
