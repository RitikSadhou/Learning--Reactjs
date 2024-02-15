import React, { useState } from 'react'

export const useCustomCounter = () => {
const{count, setcount}=useState(0)
const handleIncrement=()=>{
    setcount(count+1);
}

  return (
   count, handleIncrement
  )
}
