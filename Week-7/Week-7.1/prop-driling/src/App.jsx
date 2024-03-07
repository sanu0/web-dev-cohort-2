import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Count count={count} setCount = {setCount}/>
//       {/**<Buttons count = {count}  setCount = {setCount}/>*/}
      
//     </div>
//   )
// }
// function Count({count , setCount}){
//   return(
//     <div>
//       {count}
//       <Buttons count = {count}  setCount = {setCount}/>
//       {/**Now this Button needs setCount but Count does not, so Count component is just like to pass setCount from one to other its not using it
//        * And it looks ugly! it acts like a mediater and it looks ugly!
//        */}
//     </div>
//   )
// }

// function Buttons({count , setCount}){
//   return(
//     <div>
//       <button onClick={()=>{
//         setCount(count + 1)
//       }}>Increase</button>

//       <button onClick={()=>{
//         setCount(count - 1)
//       }}>Decrease</button>
//     </div>
//   )
// }

/**Prop drilling refers to the process of passing data from a top-level component down to deeper levels through intermediate components. 
 * It happens when a piece of state needs to be accessible by a component deep in the component tree, 
 * and it gets passed down as a prop through all the intermediate components.
 * Why Prop Drilling?
      State Management:
        Prop drilling is often used to manage state in a React application. By passing state down through the component tree, 
        you can share data between components without resorting to more advanced state management solutions like context or state management libraries.
      Simplicity:
        Prop drilling keeps the application structure simple and makes it easier to understand the flow of data. It's a straightforward way of 
        handling data without introducing more complex tools.
 */

//---------------------------------------------Context-API-----------------------------------------------------------------------------------------------

/**
 * It provides a way to pass data through the component tree without having to pass props down manually at every level. 
 * The Context API helps in managing state at a global level, making it accessible to any component in the application without
 * the need to pass the data through intermediate components.
 * 
 * If you use the context api, you are pushing your state management outside the code react components
 */


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value = {count}>
          <Count setCount = {setCount}/>
      </CountContext.Provider>     
    </div>
  )
}

/**Now we want that our count should reach Counrenderer as well as Buttons without passing it through Count component Here we use Context Api */
function Count({setCount}){
  return(
    <div>
      <CountRenderer />
      <Buttons setCount = {setCount}/>
      {/**Now this Button needs setCount but Count does not, so Count component is just like to pass setCount from one to other its not using it
       * And it looks ugly!
       */}
    </div>
  )
}




function CountRenderer(){
  const count = useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}
/**Since we assume that context api give the optimization that when you use it, The Count component since is not using the count state variable that is why i
 * It must not get rerendered whnever the state var changes!
 * But does context APi really teleport and solves the prop drilling!!!!!
 * It still gets re rendered as Context API is there just to make syntax cleaner and to get rid of prop drilling and it does not let away with
 * re rendered.
 * 
 * It is done using the state management libraries.
*/

function Buttons({setCount}){
  const count = useContext(CountContext);
  return(
    <div>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  )
}

export default App
