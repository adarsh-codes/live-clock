"use client"
import React, {useState, useEffect } from 'react'




function Body() {

    const [time,setTime] = useState(new Date());


    useEffect(()=>{
      setInterval(()=>{
         setTime(new Date())
      },1000)
    },[])




    

    let a  = time.toLocaleDateString();
    let b = time.toLocaleTimeString();

   
  return (
    <div className='clock rounded bg-slate-500 border p-5 text-6xl'>
      Current date : {a} <br>
      </br> 
      Current time : {b}
      
     
    

    </div>
  )
}

export default Body
