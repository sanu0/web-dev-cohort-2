import { useState, useEffect } from 'react'
import React from 'react';

function App() {
  //We making our component unmount after 5 sec

  const [render, setRender] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setRender(r => !r)
    },2000)
  })

  return (
    <div>
      {render ? <MyComponent /> : <div></div>}
    </div>
  )
}
//class based components whhich is not used nowadays. This is how we make states in class based components.
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

//Life cycle events.Whenever the components mounts first time or unmounts and we have to run some code and  we have done this using useEffect() hook
//in functional components.

/**This is FUNCTIONAL COMPONENT *///----------------------------------------

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("component mounted")

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted")
    };
  }, []);
  /**So when there is a dependency in the useEffect, when the component first time mounted then it will run evevry thing in the mounted part of the 
   * useEffect, but whenever the dependencies changes then it will first unmount the things and so it will run whataver in the unmounting part
   * of the useEffect and then again run the things which is in the mounting part of the useEffect.
   * So                                                    on and so forth.
   */

  // Render UI
  return(
    <div>
      From inside my component.
    </div>
  )
}
//-----------------------------------------------------------------------------------

//This is how we use lifecycle events using class based components

//------------------------------------CLASS BASED COMPONENTS (LIFE CYCLE EVENTS)----------------------------------------------------------------

// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("component mounted")
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)\
//     console.log("unmounted")
//     //this runs when the component unmount or the dependencies changes. so first it will run and then the next mount logic will run.
//   }

//   render() {
//     // Render UI
//     return <div>hi there</div>
//   }
// }
// //This time using the class based components is better in syntax and has a clean syntax.

export default App
