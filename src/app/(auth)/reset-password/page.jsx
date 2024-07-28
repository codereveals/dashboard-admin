import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="h-screen flex gap-8 items-center ">
      <div className="flex items-center justify-center w-full md:w-[60%]">
        <Image
          src="/login-bg1.svg"
          width={500}
          height={500}
          alt="Login Image"
          className="scale-105 fill-blue-500"
        />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center bg-slate-50 w-full h-full md:w-[38%] p-2 xl:p-3 xxl:p-12">
        <div className="mb-5">
          <Image src="/logo.svg" width={150} height={100} alt="logo" className="logo"/>
        </div>
        <h2 className="text-2xl font-bold text-slate-700 text-center">
          Welcome to Admin
        </h2>
        <p className="text-md font-bold text-purple-700 text-center py-3">
          Reset Password
        </p>

        <div className="flex gap-2 items-center my-3 w-[80%] mx-auto">
          <div className="h-[1px] bg-indigo-500 w-full border-indigo-500"></div>{" "}
          <div>Or</div>{" "}
          <div className="h-[1px] bg-indigo-500  border-indigo-500 w-full"></div>
        </div>


        <form action="" className="my-6 block w-[80%] mx-auto">
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter New Password"
              className='sm:flex items-center w-full text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"'
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              placeholder="Enter Confirm Password"
              className='sm:flex items-center w-full text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"'
            />
          </div>
         
          <div className="flex items-center justify-between gap-3 my-6">
           

            
          </div>
          <div className="my-8 mb-4">
            <button className="flex mx-auto justify-center rounded-lg text-sm items-center font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700">
              {" "}
             Reset Password
            </button>
          </div>
        </form>

        <div className="flex justify-between">
          <div>
          <p className="font-semibold text-slate-800"> Go to Login Page <Link href="/" className="text-sky-500"> Click Here </Link> </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
