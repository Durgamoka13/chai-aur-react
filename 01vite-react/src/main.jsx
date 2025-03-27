import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Durga rao </h1>
    </div>
  )
}

const anotherElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit Google Durga"
);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* <App /> *
    // MyApp()
    anotherElement  
  // </StrictMode>,
)
