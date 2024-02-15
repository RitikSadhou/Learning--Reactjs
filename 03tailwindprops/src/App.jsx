import { useEffect, useState } from 'react'
import './App.css'
import Card from './card'


function App() {
  const [count, setCount] = useState(0)
  let myobj={

    username:"ritik",
    age:23

  }

  return (
    <>
       
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card username="chai aur code" btnText="clickme" />
      <Card username="ritik" btnText="clickme"/>
      
  </>
  ) 
}

export default App
