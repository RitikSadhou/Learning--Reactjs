import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../component/Header'
const Contact = () => {
  const navigate=useNavigate()
  const gotohome=()=>{
    navigate('/')
  }
  return (
<>
   
   <section><h1>ConTact Page</h1></section>
   <button onClick={gotohome}>Go to Home</button>
   </>
  )

}

export default Contact