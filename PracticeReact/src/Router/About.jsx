import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../component/Header'
const About = () => {
const navigate=useNavigate()

  const gotocontact=()=>{
    navigate("/contact");
  }
  return (
<>
  
   <section><h1>About Page</h1></section>
   <button onClick={()=>gotocontact()}>go to contact page</button>
   <button onClick={()=>{navigate(-1)}}>goback</button>
   </>
  )
}

export default About