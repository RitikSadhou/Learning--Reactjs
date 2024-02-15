import React from 'react'

export const Learnliftingstate = (props) => {


// passing a data child component to praent component
const handleclicked=(e)=>{
    e.preventDefault()
    let data="I am Child Data"
    props.myclick(data)
} 
  return (
    <>
    <button onClick={handleclicked}>clicked</button>
    </>
  )
}
