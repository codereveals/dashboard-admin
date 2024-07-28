import React from 'react'
import { FaUsersGear } from "react-icons/fa6";

const CardDash = ({dynaClass, totalNumber, title}) => {
  return (
    <div className={` ${dynaClass} p-10 rounded-md overflow-hidden relative flex justify-center items-center flex-col `}>
          <h2 className="font-bold text-4xl">{totalNumber}</h2>
          <p className="text-xl font-semibold">{title}</p>
          <span className="flex justify-center items-center h-20 w-20 shadow-md rounded-full bg-sky-300 absolute -top-2 -right-3">
            <FaUsersGear fontSize={30} fill="#fff" />
          </span>
        </div>
  )
}

export default CardDash