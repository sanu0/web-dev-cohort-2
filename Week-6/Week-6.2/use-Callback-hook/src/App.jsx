import { memo, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //var a = 1;  -> Here it will not change as numerical vars in js is not checked if equal or not using references!
  // function a(){
  //     console.log("Hi there!");
  // }// Now since a is a function so it will definetly have referential equality and everytime the App gets re renderd it will start once again with new ref
  // //And so it will also gets rerenders which it should not!

  /**
   * So useCallBack will work in the way that when you use this hook then it will not unneccessarily re render something which is not changed even
   * though they are referentially equal and not value wise!
   */

  const a = useCallback(function(){
    console.log("hi there!");
  },[])

  return (
    <div>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Counter({count})</button>
      <Demo a={a}></Demo>
    </div>
  )
}
/**Here as well you can see that We used memo here which only rerenders when the props value changed otherwise it won't. Since the react knows that 
 * The value of a is not changed that is why it is not rerendering it.
 */
const Demo = memo(function Demo({a}){
  console.log("rerender");
  return(
    <div>
      hi there {a}
    </div>
  )
})
/**'useCallBack() is a hook in React which is used to memoize functions, which can help in optimizing the performance of your application
 * Especially in cases involving child components that reply on reference equality to prevent unneccessary renders.
 * 
 * -------------------
 * var a = 1;
 * var b = 1;
 * 
 * a == b 
 * o/p
 * true
 * 
 * but 
 * -------------------
 * -------------------
 * function sum(a,b){return a + b}
 * function sum2(a,b){return a + b}
 * 
 * sum == sum2
 * o/p
 * False
 * 
 * so functions even though are the same in value are referentially not same.
 */
export default App
