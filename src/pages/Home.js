import React, { useState , useEffect } from 'react'
import MealList from '../components/MealList';
import Spinner from '../components/Spinner';
import foodpic from '../photo/foodpic.jpg'
import './Home.css';
import {useRef} from 'react';
import Footer from '../components/Footer';



const Home = () => {
    const[mealData, setMealData] = useState('');
    const[query, setQuery] = useState('');
    const[loading, setLoading] = useState(false);
    const ref = useRef(null);
  
    function changeHandler(event) {
        setQuery(event.target.value)
    }
    
 
  
    async function fetchData () {
  
     const url = `https://api.spoonacular.com/recipes/random?apiKey=c7e75d54090c4750a2d69445256b6530&number=9`;
      
      setLoading(true);

      try{
          const result = await fetch(url);
          const data  = await result.json();
          setMealData(data);
      }
      catch(error){
         console.log('error');
      }
  
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData();
    },[]);
  
  
  async function clickFetchData () {
     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c7e75d54090c4750a2d69445256b6530&query=${query}&number=9`;
     
     setLoading(true);
     try{
      const result = await fetch(url);
      const data  = await result.json();
      setMealData(data);
     }
     catch(error){
     console.log('error');
     }
     
     setLoading(false);
    }
    
    function clickHandler(){
        clickFetchData();
            ref.current?.scrollIntoView({behavior: 'smooth'}); 

    }
  
  
    return (
      <div className='w-max-w p-0 m-0 '>
           
           {/* Home page */}
           <div className='p-0 m-0 relative flex flex-col justify-center items-center'>
              
                <div  className='relative w-full h-full z-10 mx-auto overflow-hidden p-0 m-0'>
                     <img src={foodpic} alt='foodpic'></img>
                </div>
               
             
                <div className='w-11/12 p-0 pt-5 lg:pb-4 rounded-lg search-container  m-0 absolute z-50 md:top-[19%] flex flex-col items-center justify-center bg-[rgba(0,0,0,.3215686274509804)]'>
                   <div className='nawab-heading font-[400] text-1xl sm:text-4xl text-center text-[#fff] roboto-regular'>
                      WELCOME TO <span className='text-[#f40000]'>TIME 2 EAT</span>
                   </div>
                   <section className='py-4 w-[100%] px-3' >
                      <input type='text' placeholder='Search recpie name...' onChange={changeHandler} className=' p-3 mx-auto placeholder:text-[#fff] placeholder:px-3 font-OpenSans placeholder:font-OpenSans placeholder:leading-5 placeholder:gap-6 input-field my-2 px-4 w-full bg-transparent rounded-[0.5rem]  text-[#fff] '
                      />
                   </section>     
                   <button  onClick={clickHandler} className='px-12 py-3 mb-3 font-OpenSans text-white text-[20px]  font-bold rounded-lg bg-[#f40000]'>Search</button>

                </div>

           </div>
           
           {/* quick search by name  */}
           <div className='w-screen m-0  mx-auto bg-[#FAFAFA] p-6 '>
              <div className='max-w-[1080px] text-center mx-auto text-2xl sm:text-3xl text-black font-bold p-5 leading-[1.2] gap-2 font-OpenSans  '>
                  QUICK SEARCH BY <span className='text-[#f40000]'>NAME</span>
              </div>
              <div>

              </div>

           </div>
           




            <div ref={ref} className='w-11/12 max-w-[1200px] mx-auto m-0' >
              {
                loading ? (<Spinner/>) : (mealData && <MealList mealData={mealData}/>)
              }
            </div>
  
            
            <Footer></Footer>
  
      </div>
    )
  }
  

export default Home