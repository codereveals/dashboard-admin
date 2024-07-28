import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const AllCategories = () => {
  return (
    <div>
         <Breadcrumb name="All Categories" subtitle="all-categries" />
         <div className="overflow-hidden mt-5">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-sm font-normal text-[#212B36]">
                  S. No.
                </th>
                <th className="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Page Name
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                 Slug Name
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Category
                </th>
                <th className="whitespace-nowrap px-2.5 py-3 text-sm font-normal text-[#212B36]">
                  Thumbnails
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  1
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                About Us
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                 about-us
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pages
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                <Image
                    width={200}
                    height={100}
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100'> <FaEye /></Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100'> <CiEdit /> </Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100'> <MdDelete /></Link>
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  2
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                Contact Us
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                 contact-us
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pages
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                <Image
                    width={200}
                    height={100}
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100'> <FaEye /></Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100'> <CiEdit /> </Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100'> <MdDelete /></Link>
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  3
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                Privacy Policy 
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                 privacy-policy
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pages
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                <Image
                    width={200}
                    height={100}
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100'> <FaEye /></Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100'> <CiEdit /> </Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100'> <MdDelete /></Link>
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  4
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                Term Conditions
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                 term-conditions
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pages
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                <Image
                    width={200}
                    height={100}
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100'> <FaEye /></Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100'> <CiEdit /> </Link>
                    <Link href="" className='flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100'> <MdDelete /></Link>
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                 5
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                Refund Policy
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                 refund-policy
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pages
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                <Image
                    width={200}
                    height={100}
                    className="inline-block h-12 w-12 rounded-md ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    <Link href="/view" className='flex justify-center items-center p-2 rounded-full w-8 text-purple-800 h-8 bg-purple-100'> <FaEye /></Link>
                    <Link href="/edit" className='flex justify-center items-center p-2 rounded-full w-8 text-green-800 h-8 bg-green-100'> <CiEdit /> </Link>
                    <Link href="/delete" className='flex justify-center items-center p-2 rounded-full w-8 text-red-800 h-8 bg-red-100'> <MdDelete /></Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default AllCategories