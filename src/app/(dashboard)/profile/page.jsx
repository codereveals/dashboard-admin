import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import React from "react";
import { FiEdit2 } from "react-icons/fi";

const AllPostList = () => {
  return (
    <div>
      <Breadcrumb name="Profile" subtitle="profile" />

      <div className="border border-slate-200 rounded-md p-6 flex justify-between">
        <div className="inline-flex flex-row gap-4 items-center">
          <Image
            src="/man.png"
            alt="profile Pic"
            width={200}
            height={200}
            className="rounded-full w-[80px] h-[80px] object-cover"
          />

          <div className="flex flex-col">
            <h2 className="font-semibold text-slate-900 text-lg">John Doe Michle</h2>
            <p className="text-slate-400 text-sm">Resource</p>
            <p className="text-slate-400 text-sm">India</p>
          </div>
        </div>
        <div>
          <button className="border border-slate-300 text-slate-400 hover:text-purple-500 rounded-md px-2 hover:border-purple-500  transition-all delay-75 py-1 text-sm flex items-center gap-1">
            <FiEdit2 />
            Edit
          </button>
        </div>
      </div>

      <div className="border border-slate-200 rounded-md p-6 flex justify-between mt-5">
        <div className=" gap-4 items-center">
        <h2 className="font-semibold text-slate-900 text-lg mb-5">Personal Information</h2>
         <div className="flex gap-[80px] justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">First Name:</h5>
                <p className="text-slate-400 text-sm">John</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Last Name:</h5>
                <p className="text-slate-400 text-sm">John</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Email: </h5>
                <p className="text-slate-400 text-sm">example@example.com</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Phone:</h5>
                <p className="text-slate-400 text-sm">(123-456-7890)</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Bio: </h5>
                <p className="text-slate-400 text-sm">Resource</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Role:</h5>
                <p className="text-slate-400 text-sm">User</p>
            </div>
          </div>
         </div>
        
        </div>
        <div>
          <button className="border border-slate-300 text-slate-400 hover:text-purple-500 rounded-md px-2 hover:border-purple-500  transition-all delay-75 py-1 text-sm flex items-center gap-1">
            <FiEdit2 />
            Edit
          </button>
        </div>
      </div>

      <div className="border border-slate-200 rounded-md p-6 flex justify-between mt-5">
        <div className=" gap-4 items-center">
        <h2 className="font-semibold text-slate-900 text-lg mb-5">Address Information</h2>
         <div className="flex gap-[80px] justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Street Name:</h5>
                <p className="text-slate-400 text-sm">Code Reveals Inc. Street 2 </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">City:</h5>
                <p className="text-slate-400 text-sm">Noida</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">State: </h5>
                <p className="text-slate-400 text-sm">UP</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Pincode</h5>
                <p className="text-slate-400 text-sm">201301</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Bio: </h5>
                <p className="text-slate-400 text-sm">Resource</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Role:</h5>
                <p className="text-slate-400 text-sm">User</p>
            </div>
          </div>
         </div>
        
        </div>
        <div>
          <button className="border border-slate-300 text-slate-400 hover:text-purple-500 rounded-md px-2 hover:border-purple-500  transition-all delay-75 py-1 text-sm flex items-center gap-1">
            <FiEdit2 />
            Edit
          </button>
        </div>
      </div>



    </div>
  );
};

export default AllPostList;
