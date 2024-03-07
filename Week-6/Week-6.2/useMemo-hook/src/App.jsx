import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react'

/**
 * 
 * create an App that does two things - 
 * 1. Increase a counter by 1
 * 2. Lets user put a value in an input box(n) and you need to show sum from 1-n
 * Restriction-> Everything needs to be inside App.
 * 
 */

//-------------------------------------------------------------UGLY SOLUTION ------------------------------------------------------------------------------
//  function App() {
//   const [counter, setCounter] = useState(0)
//   const [inputValue,setInputValue] = useState(1);

//   let count = 0;
//   for(let i=0;i<=inputValue;i++){
//     count = count + i;
//   }

//   return (
//     <div>
//       <input onChange={function(e){
//         setInputValue(e.target.value);
//       }} type="text" placeholder='Find sum from 1 to n' />
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button onClick={()=>{
//         setCounter(counter + 1);
//       }}>Counter ({counter})</button>
//     </div>
//   )
// }
/**
 * When you click on the button it changes the state variable which as a result will make the App var to run again and it will rerender the whole
 * parent component of the div. Now the thing is that when button is clicked then it will re run the costly algorithm again which is totally inefficient.
 * 
 * useMemo lets you remember some value across the renders..... which in turn will make our code efficient as no more re running of that costly algo.
 * 
 */
//--------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------Solution using UseMemo()-------------------------------------------------------------------------------
function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue,setInputValue] = useState(1);

  
  let finalCount = useMemo(()=>{
    let count = 0;
    for(let i=0;i<=inputValue;i++){
      count = count + i;
    }
    return count;
  },[inputValue])
  

  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} type="text" placeholder='Find sum from 1 to n' />
      <br />
      Sum from 1 to {inputValue} is {finalCount}
      <br />
      <button onClick={()=>{
        setCounter(counter + 1);
      }}>Counter ({counter})</button>
    </div>
  )
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------
export default App

/**
 * useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary recalculations when the component re-renders.
 *  It takes a function (referred to as the "memoized function") and an array of dependencies. The memoized function will only be recomputed 
 * when the values in the dependencies array change.
 * useMemo is particularly useful when dealing with expensive calculations or when you want to optimize performance by 
 * avoiding unnecessary computations during renders. It's important to use it judiciously, as overusing memoization can lead to increased complexity.
 */