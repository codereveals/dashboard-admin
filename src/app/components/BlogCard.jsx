import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({blog}) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden ">
      <div className="">
        <Image src="/man.png" width={400} height={300} alt="" className="w-full" />
      </div>
<div className="px-3 py-3 mb-5">
<h2 className="text-lg text-slate-900 my-3 font-medium">{blog.title}</h2>
      <p className="text-sm text-slate-500 mb-5">{blog.body}</p>
      <Link
        href={`blogs/${blog.slug}`}
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      >
        Read More
      </Link>
</div>
    
    </div>
  );
};

export default BlogCard;
