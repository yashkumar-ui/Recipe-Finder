import React from 'react'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center px-[4rem] py-8 text-white bg-gradient-to-r from-[#000] via-[#201105] to-[#000] ...'>
        <div className='font-OpenSans text-[#f1f1f1] flex justify-center items-center text-center  font-[300] text-sm md:text-lg leading-[1.3] gap-2 '>Made with <i className='text-[#f40000]'><FaHeart/></i> by Yash...</div>
    </div>
  )
}

export default Footer