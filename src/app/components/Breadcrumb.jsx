import Link from "next/link";
import React from "react";

const Breadcrumb = ({ name, subtitle }) => {
  return (
    <div className="p-3 rounded-md mb-5 bg-purple-50">
      <h2 className="text-lg font-bold">{name}</h2>
      <ul className="breadcrumb relative">
        <li className="item-list relative">
          <Link href="">Home</Link>
        </li>
        <li className="item-list relative">
          <Link href="/dashboard" className="hover:text-purple-800">{subtitle}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
