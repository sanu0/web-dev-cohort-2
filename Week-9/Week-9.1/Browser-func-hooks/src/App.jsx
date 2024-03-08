
  import { setDriver } from 'mongoose'
import { useEffect, useState } from 'react'


  /**
 * 
 * Create a hook that returns true or false based on weather the user is currently online
  You are given that - 
  window.navigator.onLine returns true or false based on weather the user is online
  You can attach the following event listeners to listen to weather the user is online or not
 */

//-------------------------------------------------------------------------------------------------------------------------
  function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
    useEffect(() => {
      setInterval(()=>{
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
        console.log("under")
      },3000)
      console.log("bahar")
    }, [])
  
    return isOnline;
  }

  /**Create a hook that returns you the current mouse pointer position. */
//------------------------------------------------------------------------------------------------------------------------
  function useMousePointer(){
    const[mousePos, setMousePos] = useState({x : 0, y : 0})

    function handleMouseMove(e){
      setMousePos({x : e.clientX , y : e.clientY})
    }

    useEffect(()=>{
      window.addEventListener('mousemove',handleMouseMove);
      return ()=>{
        window.removeEventListener('mousemove', handleMouseMove);
      }
    },[])
    return mousePos;
  }

  //Custom hook that is used to tell the window size of the browser.
//-----------------------------------------------------------------------------------------------------------------------
  function useDimensions(){
    const [position , setPosition] = useState({len : 0 , wid : 0})

    useEffect(()=>{
      setPosition({len : window.innerHeight, wid : window.innerWidth});
    },[])

    return position;
  }


//-----------------------------------------------------------------------------------------------------------------------
  /**Using debouncing has a custom hook */
 
  function useDebounce(value , timeout){
    const [debouncedValue, setdebouncedValue] = useState(value);

    useEffect(()=>{
      let timeoutNumber = setTimeout(()=>{
        setdebouncedValue(value);
      },timeout)

      return ()=>{
        clearTimeout(timeoutNumber)  //Clear the old clock and keep starting new clock till the time the update is stopped for atleast 500 ms and only the
        //update or return the debounced value.
      }
    },[value])
    return debouncedValue;
  }

  //---------------------------------------------------------------------------------------------------------------------

  function App() {

    const[value , setValue] = useState(0);
    const debouncedValue = useDebounce(value, 500);
    //const isOnline = useIsOnline();
    const mouseLoc = useMousePointer();
    const dimension = useDimensions();

    return (
      <>
      {/* <h3>{isOnline ? "online" : "offline"}</h3> */}
      Debounced value is {debouncedValue}
      <br />
      <input type = "text" onChange={e => setValue(e.target.value)} />
      <br />
      {"X location of cursor : " + mouseLoc.x + "     "+"Y location of cursor : " + mouseLoc.y}
      <br />
      {"Length of window : " + dimension.len + "     "+"Width of window : " + dimension.wid}
      </>
    )
  }
  /**Returning output of each hooks together will create so many re-renderings and even if one state changes say for the mouse pointer then it will
   * unneccesarily re-renders all other states as well.
   * For the same purpose we introduce the Recoil state management library and the concept of atoms and selectors.
   */
  export default App
