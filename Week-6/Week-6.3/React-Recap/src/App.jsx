import { useState } from 'react'

import './App.css'

/**
 * In React, the useRef hook is used to create a mutable object that persists across renders without causing the component to re-render
 *  when the value changes. It provides a way to access and interact with the DOM directly or to persist values across renders without 
 * triggering a re-render.
 * it shows how can u overwrite what react has written on render or on the screen.
 * 
 * Here are some common use cases for useRef in React:
 * 
 * 1.Accessing DOM Elements:
 * 
 */

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>{
        setCount((count)=> count + 1);
      }}>Counter {count}</button>
    </div>
  )
}

export default App

/**Note that if a parent component re-renders its children and grandchildren also re-renders and so on.
 * So if you are using a callback function and passing it to some child component then it will re-renders if the parent re-renders and the
 * callback function is not in the useCallback() hook then it will rerender as well.
 * 
 * we can use memo and memo is quite diffeernt from the useMemo as useMemo() is a hook while memo keep lets you skip the re-render when 
 * it's props are unchanged. 
 * So for child we can use memo!!
 * 
 * but if u use callback function value in the props then it will still change as functional equality changes!!
 * 
 */
