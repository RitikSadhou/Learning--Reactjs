import { useState } from 'react'
import "./App.css";
import { LearnComponent } from './components/LearnComponent'
import { Learnjsx } from './components/Learnjsx'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
import { Learnliftingstate } from './components/Learnliftingstate'
import { LearnUseState } from './components/LearnUseState'
import { LearnUseEffect } from './components/LearnUseEffect'
import { LearnUsememo } from './components/LearnUsememo'
import { LearnUseCallBacks } from './components/LearnUseCallBacks'
import { GenrateRandomNumber } from './components/GenrateNumber'
import { LearnCustomHook } from './components/LearnCustomHook'
import { LearnConditional } from './components/LearnConditional'
import { LearnMap } from './components/LearnMap'
import { LearnInlinecss } from './components/LearnInlinecss'
import LearnRouter from './components/LearnRouter'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Router/About'
import Home from './Router/Home'
import Contact from './Router/Contact'
import Header from './component/Header';
import Error from './Router/Error';
import Mainheader from './Router/Mainheader';
function App() {
  const [count, setCount] = useState(0)
  const roll=1012
  const arr=["ritik", "sadhou"]
  const getdata=(data)=>{
     console.log(data)
  }
  return (
 <BrowserRouter >
 <h1 className="font-serif text-3xl text-center text-white p-10" >React</h1>
    {/* <LearnComponent/>*/} 
     {/* <Learnjsx/> */}
     {/* <LearnProps name={arr}  roll={roll}/>*/}  
     {/*  <LearnEvent/> */}
     {/*  <Learnliftingstate  myclick={getdata}/>*/}
    {/*   <LearnUseState/>*/}
     {/*  <LearnUseEffect/>*/}
     {/* <LearnUsememo/>*/}
    {/* <LearnUseCallBacks/> */}
   {/*  <LearnCustomHook/> */}
     {/*<LearnConditional/> */}
   {/*   <LearnMap/>*/}
  {/* <LearnInlinecss/>*/} 
 
  <Routes>

<Route path='/' element={<Mainheader/>} >
<Route index element={<Home/>}/>
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact/>} />
<Route path='*' element={<Error/>} />
</Route>
</Routes>


 
 </BrowserRouter>
      
  

      
    
  )
}

export default App
