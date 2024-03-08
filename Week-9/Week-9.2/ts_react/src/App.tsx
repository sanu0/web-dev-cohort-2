import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Install tsc/Typescript globally
 * 
 *    npm install -g typescript
 * 
 * Initialize an empty Node.js project with typrscript
 * 
 *    mkdir node-app
 *    cd node-app
 *    npm init -y
 *    npx tsc --init
 * 
 *
 */



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todo title='Go to gym' description='Going to gym in morning' done= {false}/>
    </div>
  )
}
interface TodoProp{
  title : string;
  description : string;
  done : boolean
}
function Todo(props : TodoProp /* any */){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h3>
      {props.description}
    </h3>
  </div>
}

export default App
