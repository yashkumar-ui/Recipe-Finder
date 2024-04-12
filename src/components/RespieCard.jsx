import React from 'react'

import {useNavigate} from 'react-router-dom'


const RespieCard = ({respieData}) => {

    const navigation = useNavigate();


    
  return (
    <div className='w-11/12 mx-auto'>
       <div className='w-full py-7'>
          <h2 className='md:text-5xl text-3xl text-center leading-[1.2] font-[550] text-[#16163F] font-OpenSans nawab-heading mx-auto underline  '>{respieData.title}</h2>
       </div>
       
       
       <div className='w-full flex flex-col'>
            <div className='flex flex-col  gap-8 md:gap-0 md:flex-row justify-between w-full px-[1rem] py-[3rem]'>
               {/* time taken */}
                <div className='px-[4rem] py-5 border rounded-full bg-[#F8EFFF]'> 
                    <p className='text-[#16163F] leading-[1.2] font-OpenSans font-[450] text-center  text-xl md:text-2xl'>
                      Time : <span className='text-[#9E3FFD]'> {respieData.readyInMinutes} Minutes</span> 
                    </p>
               </div>
                <div className='px-[4rem] py-5 border rounded-full bg-[#F8EFFF]' >
                  <p className='text-[#16163F] leading-[1.2] font-OpenSans font-[450] text-center text-xl md:text-2xl'>
                   Servings : <span className='text-[#9E3FFD]'> {respieData.servings}</span>
                  </p>
               </div>
                <div className='px-[4rem] py-5 border rounded-full bg-[#F8EFFF]'>
                   <p className='text-[#16163F] leading-[1.2] font-OpenSans font-[450] text-center text-xl md:text-2xl'>
                    HealthScore : <span className='text-[#9E3FFD]'> {respieData.healthScore}</span>
                   </p>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row items-center lg:gap-y-0 gap-y-5 justify-center  lg:gap-x-4 py-7'>
               <div className='lg:w-[50%] px-2  '>
    
                      <h3 className='font-OpenSans text-center font-[600] leading-[1.2] text-[#16163F] text-3xl'>Summary.</h3>
                      <div className='w-12 h-1 bg-[#f40000] items-center mx-auto mb-5'></div>
                 
                 
                  
                  <p dangerouslySetInnerHTML={{__html:respieData.summary}} className='w-full font-OpenSans text-start text-xl font-[350]'></p>
               </div>
    
                <div>
                   <img src={respieData.image} loading='lazy' alt='respie' className='rounded-md shadow-md' ></img>
                </div>
            </div>



       </div>


       <div className='w-full mt-7 flex flex-col' >
          <h3 className='font-OpenSans text-center font-[600] leading-[1.2] text-[#16163F] text-3xl'>Instructions</h3>
          <div className='w-12 h-1 bg-[#f40000] mx-auto item-center mb-5'></div>
          <div>
            
             <p dangerouslySetInnerHTML={{__html:respieData.instructions}} className='md:px-8 px-2 font-OpenSans leading-[1.5] text-start text-xl font-[380]'></p>
          </div>
       </div>     

       <div className='w-full my-[4rem] flex items-center justify-center'>
            <button onClick={ () => navigation(-1)} className='py-4 px-14 text-white text-xl font-OpenSans leading-[1.2] font-[400] rounded-full hover:bg-[#BA0021] md:text-2xl bg-[#f40000]' >Back</button>
       </div>

    </div>
  )
}

export default RespieCard