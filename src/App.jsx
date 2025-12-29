import React, { useState } from 'react'
import './App.css'
import Count from './components/Count'
import Navbar1 from './components/Navbar1'
import Cards from './components/Cards'
import CardComp from './components/CardComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'



function App() {
  const[hide,sethide] = useState(true);
    
  let handlehide = () =>{
     sethide(false)
}
  
  return (
  <div>
    <Navbar1/>
    <Cards/>
    {/* <CardComp/> */}
    <About/>
 
 {hide ? true : false}
 <button unclick ={handlehide} >
  logout
 </button>
    </div>
  )
}

export default App
