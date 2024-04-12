import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-full px-[4rem] justify-between items-center  py-6 text-white bg-gradient-to-r from-[#000] via-[#201105] to-[#000] ... '>
        
         <div className='text-center'>
            <Link to='/' >
               <p className='font-OpenSans text-[#f1f1f1]  font-[500] text-2xl leading-[1.2] gap-2 '>  Time <span className='text-[#f40000]'> 2 Eat</span>  </p>
            </Link>
            
         </div>

         <div className='text-center'>
           <Link to='/'>
             <p className='font-OpenSans text-[#f1f1f1] underline font-[500]  text-xl leading-[1.2] gap-2 '>
                Home
             </p>
           </Link>
         </div>


    </div>
  )
}

export default Navbar