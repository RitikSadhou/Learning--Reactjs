import React, { useState } from 'react'

export const LearnConditional = () => {
    const state=true;

    const[isLogin, setLogin]=useState(true)
  return (
   <>
   {state && <h1>Hii React</h1>}
   {isLogin ? 
   (<> <h1> DashBoard</h1>
   <button onClick={()=> setLogin(false)}>LOgout</button>
   
   </>) 
   :
   
   
   (<> <h1> Login Page</h1>
    <button onClick={()=> setLogin(true)}>Login</button></>) }
   </>
  )
}
