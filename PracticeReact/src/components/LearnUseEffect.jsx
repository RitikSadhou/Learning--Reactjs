import React, { useEffect, useState } from 'react'

export const LearnUseEffect = () => {
const[count, setCount]=useState(null);
const[random, setrandom]=useState(null)

const genrateRandomnumber=()=>{
    console.log("Genrate random function");
    const newrandom=Math.floor( Math.random()*100)
    setrandom(newrandom)
}

//Ex-1 It runs Each time when compnent is mounted and re -render

/*useEffect(()=>{
    console.log("UseEffect is Called");
})*/

//Ex-2 It runs once when component is mounted ([]) means 0 dependancies

/*useEffect(()=>{
    console.log("UseEffect is Called");
},[])
*/

//EX-3 It runs when component is mounted and whenever dependancies change
/*useEffect(()=>{
    console.log("UseEffect is Called");
}, [count])
*/

// Ex-4 the cleanup function is (the functioon you return from useeffect) runs when the component is mounted or dependancies in dependency array change since count in the dependency array whenever count is change the cleanup function is called before the new effect runs.

/*useEffect(()=>{
    console.log("UseEffect is Called");
    return ()=>{
        console.log("Component will unmounted ");
    }
},[count])*/
  return (
    <>
    <h1>Value:{count}</h1>
    <button onClick={()=> setCount(count+1) }>Update</button>
    <h1>Random Number:{random}</h1>
    <button onClick={()=>setrandom(genrateRandomnumber)}>Genrate</button>
    </>
  )
}
