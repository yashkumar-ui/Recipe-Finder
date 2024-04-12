import React, { useState , useEffect} from 'react'
import { useLocation} from 'react-router-dom'
import Spinner from '../components/Spinner';
import RespieCard from '../components/RespieCard';
import Footer from '../components/Footer';

const Respie = () => {

    const location = useLocation();
    // const id = location.pathname.split("/").at(-1);
    const[loading, setLoading] = useState(false);
    const[respieData, setRespieData] = useState('');

    //call the function to fetch rescipe information

    // async function fetchRespieInformation () {
    //     const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=56135f7cb0f34ed1b2bafb27d3ec834a`;
    //     setLoading(true);

    //    try{
    //       const result = await fetch(url);
    //       const data = await result.json();
    //       setRespieData(data);

    //    }
    //    catch(err){
    //      console.log("error in api call");
    //      setRespieData(null);
    //    }
    //    setLoading(false);

    // }
    
    useEffect( () =>{
        const id = location.pathname.split("/").at(-1);
        async function fetchRespieInformation () {
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=c7e75d54090c4750a2d69445256b6530`;
            setLoading(true);
    
           try{
              const result = await fetch(url);
              const data = await result.json();
              setRespieData(data);
    
           }
           catch(err){
             console.log("error in api call");
             setRespieData(null);
           }
           setLoading(false);
    
        }
        
        fetchRespieInformation();

    },[location.pathname])
    
   
  return (
    <div className='w-full bg-[#FAFAFA]  p-0 m-0'> 
        
        <div >
           {
            loading ? (<Spinner/>) : (<RespieCard respieData = {respieData} />)
           }
        </div>


        <Footer></Footer>
    </div>

  )
}


export default Respie


