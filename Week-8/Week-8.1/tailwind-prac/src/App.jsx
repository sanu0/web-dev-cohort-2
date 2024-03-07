import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<div style={{display : 'flex', justifyContent : "space-between"}}>
        <div style={{backgroundColor : "magenta"}}>this is a flexbox css</div>
        <div style={{backgroundColor : "blue"}}>this is a flexbox css</div>
        <div style={{backgroundColor : "yellow"}}>this is a flexbox css</div>
        <div style={{backgroundColor : "green"}}>this is a flexbox css</div>
      </div>*/}
      {/*This is how it is almost done in plane css*/}

      <div className='flex justify-around'>
        <div className = "bg-blue-500">this is a flexbox css</div>
        <div className = "bg-red-200">this is a flexbox css</div>
        <div className = "bg-green-500">this is a flexbox css </div>
      </div>

      <div className='grid grid-cols-10'>
        <div className = "bg-blue-500 col-span-4">this is a grid css</div>
        <div className = "bg-red-500 col-span-2">this is a grid css</div>
        <div className = "bg-green-500 col-span-4">this is a grid css </div>
      </div>
    </>
  )
}

export default App
