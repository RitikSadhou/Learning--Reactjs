import React from 'react'

export const LearnEvent = () => {
    const handelclick=(e)=>{
   e.preventDefault();
   console.log(e.target.innerText, "Button clicked")
    }
  return (
    <>
    <button onClick={handelclick}>Click1</button>
    </>
  )
}
