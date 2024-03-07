import React, { useState } from 'react'

//--------------------------------------React returns-------------------------------------------------------------------------------------------------
// function App() {
//   const [count, setCount] = useState(0)
//   {/**Here you have to have the top level xml(div in our case) React cannot return two xml components so you have to create a top level parent
//   So to overcome this, say we want to return two siblings but since react won't let us do so , so we create an empty parent <> like this </>
//   this will ultimetely wont show as a div when renders.
//   Also another way is that you can create <React.Fragment> </React.Fragment> and it will work just fine.
// */}
//   return (
    
//     <>
//       <React.Fragment>

//         <Headers title="Sanu0"></Headers>
//         <Headers title="Sanu1"></Headers>
//       </React.Fragment>
//     </>
//   )
// }
// function Headers({title}/**Object destructuring */){
//     return <div>
//       {title}
//     </div>
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------REACT RE-RENDER--------------------------------------------------------------------------------
// function App() {
//   //const[count,setCount] = useState(0);
//   {/**The issue is when the dynamic part of website which is button in our case gets re-renders the everything inside the parent the react is returning
//     also gets re-renders even though they are not dynamic part of the website and they need not to be re-render.
//     So our goal is to minimize the re-renders as much as possible.
// */}
// {
//   /**The logic of React is whenever the setCount or any stateUpdater of any multiple useState that we have defined is changed then the App function is 
//    * called again and since it called again the parent it returns also gets called again and re renders all of its children.
//    * 
//    * How to minimize it?????????????????
//    * 1-> The easy way is that we are using useState in our App and that's why it get re called everytime the setCount or state updater in general is changed
//    * We can push it own to our component function logic and whenever the state updater is changed the component gets re-rendered and not the the App and in
//    * that way just the desired dynamic component is getting called only!
//    * 
//    */
// }
//   return <div>
//     <MyButtonWithDescription ></MyButtonWithDescription>
//     <MyHeader title={"This should not re render but it does! : "+ Math.random() }></MyHeader> {/**Only this thing should re render but everytging is re-rendering now */}
//     <MyHeader title={"If the above random number is changing, then it shows that the static part also getting re-render which it should not."}></MyHeader>
//   </div>
// }
// function MyButtonWithDescription(){
//   const[count,setCount] = useState(0);
//   //Since the state is only here so only these things should get re-renders and this was our goal.
//   function onClickHandler(){
//     setCount(count+1);
//   }
//   return <div>
//     <button onClick={onClickHandler}>Counter {count}</button>
//     <MyHeader title={count}></MyHeader>
//   </div>
   
// }
// function MyHeader({title}){
//   return <div>
//     {title}
//   </div>
// }

// /**
//  * So to overcome the overall unneccesary re renderings we keep our state to the LCA(lowest common ancestor) of the Dom. So when
//  * it re-renders only the LCA and it's children gets re renders and not the parent and other child which was static!
//  */


//-------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------Re-rendering minimization using React.memo()-----------------------------------------------------------------

function App() {
  const[count,setCount] = useState(0);
  
{
  /**The logic of React is whenever the setCount or any stateUpdater of any multiple useState that we have defined is changed then the App function is 
   * called again and since it called again the parent it returns also gets called again and re renders all of its children.
   * 
   * How to minimize it?????????????????
   * 
   * 
   */
}
  return <div>
    <MyButtonWithDescription count = {count} setCount = {setCount} ></MyButtonWithDescription>
    <MyHeader title={"This should not re render but it does! : "+ Math.random() }></MyHeader> {/**Only this thing should re render but everytging is re-rendering now */}
    <MyHeader title={"If the above random number is changing, then it shows that the static part also getting re-render which it should not."}></MyHeader>
    <MyHeader title={"If the above random number is changing, then it shows that the static part also getting re-render which it should not."}></MyHeader>
    <MyHeader title={"If the above random number is changing, then it shows that the static part also getting re-render which it should not."}></MyHeader>
    <MyHeader title={"If the above random number is changing, then it shows that the static part also getting re-render which it should not."}></MyHeader>
  </div>
}

const MyButtonWithDescription = React.memo(function MyButtonWithDescription(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <div>
    <button onClick={onClickHandler}>Counter {props.count}</button>
    <MyHeader title={props.count}></MyHeader>
  </div>
    
})
const MyHeader = React.memo(function MyHeader({title}){
  return <div>
    {title}
  </div>
})
/**
 * In this approach the Math.random part was getting re rendered as Math.random() is everythime giving different results and so it is perfectly fine 
 * when it is getting re rendered. React.memo() re renders when the state that gets input in the component gets change and since math.random is in the
 * title that is why it is getting changed. You can fix it but let us leave it.
 */

//-------------------------------------------------------------------------------------------------------------------------------------------------------
export default App
