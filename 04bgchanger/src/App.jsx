import { useState } from 'react'
import React from 'react'

function App() {
 const [color, setColor] = useState('purple')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}}>Orange</button>
            <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'pink'}}>Pink</button>
            <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>Black</button>
            <button onClick={() => setColor('white')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'white'}}>White</button>
            <button onClick={() => setColor('gray')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>Gray</button>
            <button onClick={() => setColor('cyan')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'cyan'}}>Cyan</button>
            <button onClick={() => setColor('teal')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'teal'}}>Teal</button>
            <button onClick={() => setColor('indigo')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'indigo'}}>Indigo</button>
            <button onClick={() => setColor('violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'violet'}}>Violet</button>
            <button onClick={() => setColor('lime')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'lime'}}>Lime</button>
          </div>
       </div>
    </div>
  )
}

export default App
