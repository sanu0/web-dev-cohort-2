import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountContext } from './context'
import { useContext, useState } from 'react'
import { EvenSelector, countAtom } from './store/atom/count'

/**
 * Problem with context API is that it is just a syntactical sugar and get rid of prop drilling as it does not get away with the re rendering. 
 * So even if the mid component that does not use that state var and due to teleportation in context API that state var is also not there but it still gets
 * re-render as context api is just syntactical sugar and not optimize the re-rendering
 */

/**
 * State management : 
 *  State management refers to the process of handling and maintaining the state or data of an application throughout its lifecycle. In frontend development, state typically represents the current condition or values of variables in an application. Effective state management is crucial for building dynamic and interactive user interfaces.
 
    In React and other frontend frameworks, there are various methods to manage state:
    Local Component State:
      Each component in React can have its own local state managed using the useState hook.
      Local state is confined to the component it belongs to and is primarily used for managing component-specific data.
    Context API:
      React provides the Context API to manage global state that needs to be accessed by multiple components.
      It allows the sharing of state across the component tree without having to pass props manually through each level.
    State Management Libraries (e.g., Redux, Recoil):
      Specialized state management libraries offer advanced features for handling complex global state in large applications.
      These libraries often introduce concepts like actions, reducers, and a centralized store for maintaining state.
    Recoil:
      Recoil is a state management library developed by Facebook specifically for React applications.
      It introduces the concept of atoms and selectors, providing a more flexible and scalable approach to managing and sharing state.
 */


/**
 * install recoil on your project : npm install recoil
 * 
 * create folders store/atom/count.jsx  -> here we define a single stom for count state.
 */

/**
 * Recoil - > Has a concept of atom to store the state. An atom can be defined outside the component, Can be teleported to any component.
 * 
 * 1.) RecoilRoot-
 * 
 * 2.) atom -
 * 
 * 3.) useRecoilState- 
 *      const [count,setCount] = useRecoilState(countAtom);
 *      So it is similar to useState where it outputs two things the state var and the state var updater.
 * 
 * 4.) useRecoilValue-
 *      useRecoilValue() will give only the value of the state var and we use it where we only need the state var and not its updater
 * 
 * 5.) useSetRecoilState-
 *       useSetRecoilState() will give only the value of the state var updater and we use it where we only need the state var updater and not its state var
 * 6.) Selector
 * 
 * 
 */


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log("re-render");
  return(
    <div>
      <CountRenderer />
      <Buttons />
      <Even />
    </div>
  )
}

// function Input(){
//   const[inputVal, setInputVal] = useState("");
//   return <div>
//     <input onChange={(e) =>{
//       setInputVal(e.target.value)
//     }}></input>
//   </div>
// }
//here we didn't use the recoil or atoms as here the state that are defined here will be used here as well so what we dont need the recoil state 
//management library here. 




function CountRenderer(){
  const count = useRecoilValue(countAtom); //i just need the value of the state var / atom
  return(
    <div>
      <b>{count}</b>
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom); // i just need the state updater / stom updater of our state var
  //we can also use useRecoilState() and get both state as well state updater and update out state here using the button but we directly
  //use the optimized syntax which only requires state updater only.
  return(
    <div>
      <button onClick={()=>{
        setCount(c => c + 1);
      }}>Increase</button>

      <button onClick={()=>{
        setCount(c => c-1);
      }}>Decrease</button>
    </div>
  )
}
function Even(){
  // const count = useRecoilValue(countAtom);
  // if(count % 2 == 0){
  //   return <div>
  //     It is Even
  //   </div>
  // }else{
  //   return(
  //     <div>
  //       It is Odd
  //     </div>
  //   )
  // }
  /**Problem with the above approach is that it gets rerendered everytime the App jsx re rendered and we have to do that expensive ops
   * again. Also we can solve this using the useMemo() and make its dependencies as count so that it only re renders when the count changes.
   * For the same pupose we have the Selectors in Recoil.
   */
  
  const isEven = useRecoilValue(EvenSelector);

  return (
    <div>
      {isEven ? "it is even" : null}
    </div>
  )


}
/**
 * Using only setCount or say state updater it will also deal with the unneccesary re render of Buttons which now is not needed.
 */

export default App
