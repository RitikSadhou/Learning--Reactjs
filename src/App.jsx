
import Chai from "./Chai"
import Hello from "./Hello"

function App() {
  
const username="ritik sadhou"
  return (
    <>
   <Chai/>// single Element but we render multiple render elemnt so return error but we render multiple element with help of fregment return
   <Hello/>
   <h1>Hii {username}</h1>
   </>
  )
}

export default App
