import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(6)

  const addvalue = () => {
    counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const subtractvalue = () => {
    counter = counter - 1
    setCounter(counter)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addvalue}>Add value :{counter}</button>
      <br/>
      <button onClick={subtractvalue}>Subtract value:{counter}</button>
    </>
  )
}

export default App
