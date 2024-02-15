import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Hello Custom React</h1>
    </div>
  )
}


const anotherElement=(
  <a href="https://google.com" target='_blank'>visted google</a>
)

const anotherUser="Chai aur React"


const reactElement=React.createElement(
  'a',
   {href:'https://google.com', target:'_blank'},
   'click', anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <App />
   
   reactElement
  </React.StrictMode>
)
