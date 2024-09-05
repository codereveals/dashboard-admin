import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const getData = async () => {
  const res = await fetch(`${process.env.DOMAIN_URL}/api/users`);
  if (!res.ok) {
    throw new Error("Something Went wrong");
  }

  return res.json();
};

const UsersList = async () => {
  const users = await getData()
  return (
    <div>
      <Breadcrumb name="All Users" subtitle="all-users" />
      <div className="overflow-hidden mt-5">
        <div className="overflow-hidden mt-5">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-sm font-normal text-[#212B36]">
                  S. No.
                </th>
                <th className="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Avatar
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Full Name
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Email
                </th>
                <th className="whitespace-nowrap px-2.5 py-3 text-sm font-normal text-[#212B36]">
                  Roles
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                users?.map((item, index) => {
                  return (
                    <tr key={item._id} className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                      <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                        {index}
                      </td>
                      <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                        <Image
                          width={32}
                          height={32}
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src="/man.png"
                          alt="Avatar Image"
                        />
                      </td>
                      <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                        {item?.username}
                      </td>
                      <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                        {item?.email}
                      </td>
                      <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                        {item.isAdmin}
                      </td>

                      <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                        <div className="relative flex items-center gap-1">
                          <div className="h-[22px] w-[22px]"></div>
                          <Link
                            href={`/all-users/${item._id}`}
                            className="flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100"
                          >
                            {" "}
                            <FaEye />
                          </Link>
                          <Link
                            href=""
                            className="flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100"
                          >
                            {" "}
                            <CiEdit />{" "}
                          </Link>
                          <Link
                            href=""
                            className="flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100"
                          >
                            {" "}
                            <MdDelete />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
