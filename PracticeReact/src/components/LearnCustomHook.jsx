import React, { useState } from 'react'
import { useCustomCounter } from '../Hooks/useCustomCounter'


export const LearnCustomHook = () => {
const{count, handleIncrement}=useCustomCounter()

  return (
   <>
   <h1>count:{count}</h1>
   <button onClick={handleIncrement}>inc</button>
   </>
  )
}
