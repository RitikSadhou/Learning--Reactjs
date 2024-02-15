import React, { useState, useCallback } from 'react'
import { GenrateRandomNumber } from './GenrateNumber';

export const LearnUseCallBacks = () => {
    const[count, setCount]=useState(null);
    
    const handleclick=()=>{
        console.log("Counter Function");
        setCount(count+1);
    }
   
  
    const [randomNumber, setrandomNumber]=useState(0)
    const genrateRandomnumber=()=>{
        console.log("Genrate random function");
        const newrandom=Math.floor( Math.random()*100)
        setrandom(newrandom)
    }
  return (
    <>
    <GenrateRandomNumber randomNumber={randomNumber} genrateRandomNumber={genrateRandomnumber} /> 
  <h1>Count:{count}</h1>
  <button onClick={handleclick}>Increse Count</button>
    </>
  )
}
