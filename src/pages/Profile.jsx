import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { FcAddImage } from "react-icons/fc";
import { FaBagShopping } from "react-icons/fa6";
import { TfiAngleRight } from "react-icons/tfi";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";

function Profile() {
  
  
  return (
    <div className='mx-auto w-[90%] pb-4'>
      <div>
        <div className='flex justify-between items-center pt-4'>
          <FaAngleLeft title='Back' className='cursor-pointer' />
          <p className='font-semibold text-black'>My Account</p>
          <SlOptions title='Options' className='cursor-pointer' />
        </div>
        <div className='flex gap-x-4 items-center mt-7'>
          <div className='border-amber-500 border rounded-full p-5 bg-amber-500'>
            <FcAddImage className='size-7' />
          </div>
          <div>
            <p>Samuel Zang</p>
            <p>samuelzang@gmail.com</p>
          </div>
        </div>
        <div className='mt-10'>
          <div className='flex justify-between items-center bg-white rounded py-2 px-3 md:hover:bg-amber-100 md:cursor-pointer'>
            <span className='flex items-center gap-x-3'>
              <IoPersonAddSharp />
              <p>Profile Details</p>
            </span>
            <TfiAngleRight />
          </div>
          <div className='md:hover:bg-amber-100 md:cursor-pointer flex justify-between items-center mt-3 bg-white rounded py-2 px-3'>
            <span className='flex items-center gap-x-3'>
              <FaBagShopping />
              <p>My Orders</p>
            </span>
            <TfiAngleRight />
          </div>
          <div className='md:hover:bg-amber-100 md:cursor-pointer flex justify-between items-center mt-3 bg-white rounded py-2 px-3'>
            <span className='flex items-center gap-x-3'>
              <MdLocalShipping />
              <p>Shipping Address</p>
            </span>
            <TfiAngleRight />
          </div>
          <div className='md:hover:bg-amber-100 md:cursor-pointer flex justify-between items-center mt-3 bg-white rounded py-2 px-3'>
            <span className='flex items-center gap-x-3'>
              <MdOutlinePayment />
              <p>Payment Methods</p>
            </span>
            <TfiAngleRight />
          </div>
          <div className='md:hover:bg-amber-100 md:cursor-pointer flex justify-between items-center mt-3 bg-white rounded py-2 px-3'>
            <span className='flex items-center gap-x-3'>
              <MdSupervisorAccount />
              <p>Account Settings</p>
            </span>
            <TfiAngleRight />
          </div>
          <div className='md:hover:bg-amber-100 md:cursor-pointer flex justify-between items-center mt-3 bg-white rounded py-2 px-3'>
            <span className='flex items-center gap-x-3'>
              <MdOutlineHelpCenter />
              <p>Help & Support</p>
            </span>
            <TfiAngleRight />
          </div>
          <button className='rounded flex items-center justify-center gap-x-2 font-semibold text-red-500 bg-pink-200 p-2 mt-10 w-full md:w-[50%] md:mx-auto md:p-3 md:rounded-md md:cursor-pointer'>
            <IoLogOut />
            <p>Log Out</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile