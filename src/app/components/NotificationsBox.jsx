"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";

const NotificationsBox = () => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotifyOpen(!isNotifyOpen);
  };

  const handleSidebarOpen = () => {
    alert("clicked");
  };
  return (
    <>
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
                      <small className="text-sky-600 ">a few moments ago</small>
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
                      <small className="text-sky-600">a few moments ago</small>
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
                      <small className="text-sky-600">a few moments ago</small>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationsBox;
