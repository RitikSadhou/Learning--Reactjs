import React, { useMemo, useState } from 'react'

export const LearnUsememo = () => {

    const[count, setCount]=useState(null);
    const[random, setrandom]=useState(null)
    
    const handleclick=()=>{
        console.log("Counter Function");
        setCount(count+1);
    }
    const genrateRandomnumber=()=>{
        console.log("Genrate random function");
        const newrandom=Math.floor( Math.random()*100)
        setrandom(newrandom)
    }

    /*const iscountTen=()=>{
        console.log("Isconunten Called");
        if(count===10){
            return "yes";
        }
        return "NO";
    }*/
    
    //In React, the useMemo hook is used to memoize the result of a computation. Memoization is a technique to optimize performance by caching the result of expensive function calls and returning the cached result when the same inputs occur again. This can be particularly useful in scenarios where a component re-renders frequently, and certain computations are resource-intensive.
    const iscountTen=useMemo(()=>{

        console.log("Isconunten Called");
        if(count===10){
            return "yes";
        }
        return "NO";

    }, [count])
  return (
    <>
    <h1>LearnUsememo</h1>

   {/* <h1>is {count} equal to 10 ? ---{iscountTen()}</h1>*/} 
   <h1>is {count} equal to 10 ? ---{iscountTen}</h1>
    <button onClick={handleclick}>IncreaseCounter</button>
    <hr />
    <h1>Random Number:{random}</h1>
    <button onClick={genrateRandomnumber}>Random</button>
    </>
  )
}
