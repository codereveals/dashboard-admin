"use client";

import { auth } from "@/utils/auth";
import { handleLogout, sessionData } from "@/utils/serverActions";
import Image from "next/image";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleNotification = () => {
    setIsNotifyOpen(!isNotifyOpen);
  };

  const handleSidebarOpen = () => {
    alert("clicked");
  };

  return (
    <header className="py-4 px-8 bg-purple-50 w-full flex justify-between">
      <div className="flex gap-5 items-center">
        <div className="icon " onClick={handleSidebarOpen}>
          <span className="cursor-pointer text-whte">
            {" "}
            <RiMenu5Line className="fill-slate-900" fontSize={30} />
          </span>
        </div>
        <div className="bg-white rounded-md px-3 py-1">
          <h2 className="font-bold text-md text-slate-800">
            Hi,
            {
             
            }
          
          </h2>
          <p className="text-slate-600 text-xs">Welcome Back </p>
        </div>

        <div className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
          <input
            type="text"
            placeholder="Search data"
            className="h-12 w-full focus:border-0 focus:outline-0 focus-within:ring-sky-500 "
          />{" "}
          <button>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none text-slate-300 dark:text-slate-400"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </button>
        </div>
      </div>
      <div className="right flex items-center">
        <div className="relative inline-block text-left mr-2">
          <div>
            <button
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center  rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleNotification}
            >
              <div className="flex ">
                <FaBell fontSize={25} className="fill-slate-500" />
              </div>
            </button>
          </div>
          {isNotifyOpen && (
            <div
              className="absolute right-0 z-20 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="">
                <h2 className="text-sm font-bold text-center text-slate-800 py-4 bg-slate-100">
                  {" "}
                  Notifications
                </h2>
                <ul className="py-3">
                  <li className="border-b-[1px] border-solid border-1 border-slate-100 pb-2 pt-2 px-3">
                    <div className="flex items-center">
                      <div>
                        <div className="flex w-12 -space-x-2 overflow-hidden">
                          <Image
                            width={32}
                            height={32}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="/man.png"
                            alt="Avatar Image"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs leading-1	">
                          New message from <strong>Bonnie Green</strong> : `Hey,
                          All set for the presentation?`
                        </p>
                        <small className="text-sky-600 ">
                          a few moments ago
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="border-b-[1px] border-solid border-1 border-slate-100 pb-2 pt-2 px-3">
                    <div className="flex items-center">
                      <div>
                        <div className="flex w-12 -space-x-2 overflow-hidden">
                          <Image
                            width={32}
                            height={32}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="/man.png"
                            alt="Avatar Image"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs leading-1	">
                          New message from <strong>Bonnie Green</strong> : `Hey,
                          All set for the presentation?`
                        </p>
                        <small className="text-sky-600">
                          a few moments ago
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="border-b-[1px] border-solid border-1 border-slate-100 pb-2 pt-2 px-3">
                    <div className="flex items-center">
                      <div>
                        <div className="flex w-12 -space-x-2 overflow-hidden">
                          <Image
                            width={32}
                            height={32}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="/man.png"
                            alt="Avatar Image"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs ">
                          New message from <strong>Bonnie Green</strong> : `Hey,
                          All set for the presentation?`
                        </p>
                        <small className="text-sky-600">
                          a few moments ago
                        </small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="/man.png"
                  alt="Avatar Image"
                />
              </div>

              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
                <form action={handleLogout} role="none">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
