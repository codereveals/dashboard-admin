

import { auth } from "@/utils/auth";
import { handleLogout } from "@/utils/serverActions";
import Image from "next/image";
import { RiMenu5Line } from "react-icons/ri";
import NotificationsBox from "./NotificationsBox";

const Header = async() => {
  const session = await auth();


  return (
    <header className="py-4 px-8 bg-purple-50 w-full flex justify-between">
      <div className="flex gap-5 items-center">
        <div className="icon " >
          <span className="cursor-pointer text-whte">
            {" "}
            <RiMenu5Line className="fill-slate-900" fontSize={30} />
          </span>
        </div>
        <div className="bg-white rounded-md px-3 py-1">
          <h2 className="font-bold text-md text-slate-800">
            Hi,
         {session?.user?.name}
          
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

        <NotificationsBox/>
        
        <div className="relative inline-block text-left">
          
          <form action={handleLogout}>
            <button
              className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  hover:bg-gray-50"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={session?.user?.image}
                  alt="Avatar Image"
                />
              </div>
Logout
          
            </button>
          </form>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
