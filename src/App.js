import React from 'react'
import { Routes , Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Respie from './pages/Respie'
import Navbar from './components/Navbar';



const App = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/respie/:ID' element={<Respie/>}/>
        </Routes>


    </div>
  )
}


export default App