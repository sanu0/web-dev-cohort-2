import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function Increment(){
    setCount(count + 1);
  }
  function Decrement(){
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <div>
        <h1>{'Count is ' + count}</h1>
      </div>
    </div>
  )
}

export default App
