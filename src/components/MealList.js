import React from 'react'
import Meal from './Meal'


const MealList = ({mealData}) => {

   const data = mealData.results || mealData.recipes ;
    
    
  return (
    <div className='w-full mt-[4rem] mb-[4rem] '>

       <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  gap-y-10'>
          {
            data.map( (meal) => {
                return <Meal key={meal.id} meal={meal}/>
            })
          }
 
       </div>

    </div>
  )
}

export default MealList