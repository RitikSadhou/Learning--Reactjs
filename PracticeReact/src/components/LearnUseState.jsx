import React, { useState } from 'react'

export const LearnUseState = () => {

 const[count, setCount]=useState(0)
 console.log(count);

 const[value, setvalue]=useState({x:1, y:2})
 console.log(value);
  return (
    <>
    <h1>
        count:{count}
    </h1>
    <button onClick={()=>{if (count<20)  setCount(count+1)}}>ADD</button>
    <button onClick={()=>{ if (count>0) setCount(count-1)}}>SUB</button>
    <button onClick={()=>{  setCount(0)}}>Reset</button>
    <h1>Values:{value.x} {value.y}</h1>
    <button onClick={()=>setvalue({x:2,y:4})}>ValueUpdate</button>
    </>
  )
}
