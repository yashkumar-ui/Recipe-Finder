import React from 'react'
import { Link } from 'react-router-dom';


const Meal = ({meal}) => {


    const id = meal.id;
    
    
    

  return (
    <div className='border rounded-md mx-auto shadow-md '>

        
        <div>
             <h1 className=' mt-5 w-full text-center leading-[1.2]  text-2xl font-OpenSans  '>{meal.title}</h1>
             <div className='w-12 h-1 mx-auto mt-1 bg-[#f40000] mb-5 '></div>
        </div>

        <div className='flex justify-center items-center p-3 ' >
            <img src={meal.image} alt='recipie' loading='lazy' className='overflow-hidden sm:min-w-[21rem] shadow-md rounded'/>
        </div>
        
        <div className='w-full flex items-center justify-center'>
           <Link  to={`/respie/${id}`} >
            <button className='p-3 my-4 px-5  shadow-md text-center w-fit  bg-[#f40000] rounded-md text-md font-OpenSans font-[600] hover:bg-[#BA0021] text-white'>See Recipe...</button>
           </Link>
        </div>

          
    </div>
  )
}

export default Meal