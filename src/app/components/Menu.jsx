"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa6";

const menuData = [
  {
    id: 1,
    name: "Dashboard",
    url: "/",
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
      { id: 22, name: "All Menu", url: "/all-menu" },
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
    name: "Users",
    isSubmenu: true,
    submenus: [
      { id: 22, name: "All Users", url: "/all-users" },
      { id: 23, name: "add User", url: "/add-user" },
    ],
  },
  {
    id: 7,
    name: "About",
    url: "/about",
    isSubmenu: false,
  },
  {
    id: 8,
    name: "Blogs",
    url:"/blogs"
    
},
];

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="menu px-5 bg-slate-900 max-w-[250px] w-full">
      <ul>
        {menuData.map((menu) => (
          <li key={menu.id} className={`${menu.isSubmenu ? "hasMenu" : ""}`}>
            <div
              className={`text-white hover:text-pink-500 flex items-start gap-4 py-3 transition-all flex-col ${
                openMenu === menu.id ? "active" : ""
              }`}
              onClick={() => menu.isSubmenu && toggleMenu(menu.id)}
            >
              {menu.isSubmenu ? (
                <>
                  <div className="flex items-center gap-2 cursor-pointer list">
                    <span>
                      <LuLayoutDashboard />
                    </span>{" "}
                    {menu.name}
                  </div>

                  {openMenu === menu.id && (
                    <ul className="pl-3">
                      {menu.submenus.map((submenu) => (
                        <li className="mb-2" key={submenu.id}>
                          <Link href={submenu.url}>
                            <span> {submenu.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={menu.url}>
                  <span className="flex items-center gap-2">
                    <span>
                      <LuLayoutDashboard />
                    </span>{" "}
                    {menu.name}
                  </span>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Menu;
