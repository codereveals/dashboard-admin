import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import React from 'react'
import { FiEdit2 } from "react-icons/fi";



const getData = async (id) => {
  const res = await fetch(`${process.env.DOMAIN_URL}/api/users/${id}`);
  if (!res.ok) {
    throw new Error("Something Went wrong");
  }

  return res.json();
};
const UserDetailPage = async ({ params }) => {
  const { id } = await params;
  const user = await getData(id)
  console.log("single user", user)

  return (
    <div>
        <Breadcrumb name="User Details" subtitle="user-details" />
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
            <h2 className="font-semibold text-slate-900 text-lg">{user.username}</h2>
            <p className="text-slate-400 text-sm">{user.isAdmin  ? "Admin" : "Resource"}</p>
            <p className="text-slate-400 text-sm">{user.country}</p>
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
                <p className="text-slate-400 text-sm">{user.firstName}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Last Name:</h5>
                <p className="text-slate-400 text-sm">{user.lastName}</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Email: </h5>
                <p className="text-slate-400 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Phone:</h5>
                <p className="text-slate-400 text-sm">{user?.phone}</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Department: </h5>
                <p className="text-slate-400 text-sm">{user.department}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Role:</h5>
                <p className="text-slate-400 text-sm">{user.isAdmin ? "admin":"Resource"}</p>
            </div>
          </div>
         </div>
         <div className='mt-5'>
         <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">About: </h5>
                <p className="text-slate-400 text-sm">{user.about}</p>
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
                <p className="text-slate-400 text-sm">{user.streetAddress} </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">City:</h5>
                <p className="text-slate-400 text-sm">{user.city}</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">State: </h5>
                <p className="text-slate-400 text-sm">{user.state}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Pincode</h5>
                <p className="text-slate-400 text-sm">{user.postalCode}</p>
            </div>
          </div>
         </div>
         <div className="flex gap-[80px] mt-5 justify-between">
         <div className="flex flex-col">
            <div className="flex items-center gap-4">
                <h5 className="text-slate-300 text-sm">Country: </h5>
                <p className="text-slate-400 text-sm">{user.country}</p>
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
  )
}

export default UserDetailPage
