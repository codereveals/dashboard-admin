import PostUser from "@/app/components/PostUser";
import { getPost } from "@/utils/data";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something Went wrong");
  }

  return res.json();
};

const BlogDetailPage = async ({ params }) => {
  const { slug } = params;
// With API 
  const blog = await getData(slug);

  // Without API 
  // const blog = await getPost(slug);

  return (
    <>
      <div className="w-full">
        <div className="rounded-md overflow-hidden">
          <Image
            src="/man.png"
            width={650}
            height={450}
            alt=""
            className="w-full"
          />
        </div>

        {/* <PostUser userId= {blog.userId} /> */}

        <div className="px-3 py-2">
          <h2 className="text-xl font-bold text-slate-800">{blog?.title}</h2>
          <p className="text-sm text-slate-600 py-3">{blog?.desc}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
