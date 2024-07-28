"use client";

import React from "react";
import Image from "next/image";
import { RiMenu5Line } from "react-icons/ri";
import Link from "next/link";
import Menu from "./Menu";

const SidebarMenu = () => {
  const handleSidebarOpen = () => {};

  return (
    <div className="w-[250px] -left-[250px] sidebarMenu min-h-screen bg-slate-900 h-full fixed top-0 md:left-0">
      <div className="flex p-5  justify-between">
        <div className="flex ">
          <Link href="">
            <Image src="/logo.svg" width={100} height={80} alt="logo" />
          </Link>
        </div>
        <div className="icon" onClick={handleSidebarOpen}>
          <span className="cursor-pointer text-whte">
            {" "}
            <RiMenu5Line className="fill-white" fontSize={30} />
          </span>
        </div>
      </div>

      <div className="py-5">
        <Menu />
      </div>
    </div>
  );
};

export default SidebarMenu;
