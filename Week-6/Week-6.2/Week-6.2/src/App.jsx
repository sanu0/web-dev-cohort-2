import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css';

//-------------------------------------------------USE EFFECT BASIC CODE----------------------------------------------------------------------------------
// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     alert("Divisible by 5");
//   },[(count % 5 == 0)])

//   return (
//     <div>
//       <button onClick={function(){
//         setCount(count+1);
//       }}>Count is {count}</button>
//     </div>
//   )
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------TODO APP USING FETCH-----------------------------------------------------------------------------------------
// function App(){
//   const [todos,setTodos] = useState([]);

//   useEffect(()=>{
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(response){
//         setTodos(response.data.todos);
//       })
//   },[])

//   return(
//     <div>
//       {todos.map(todo => <Todo title = {todo.title} description = {todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title, description}){
//   return(
//     <div>
//       <h1>{title}</h1>
//       {description}
//     </div>
//   )
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------Fetch Todo using ID------------------------------------------------------------------------------------------------
  function App(){
    const [id,setId] = useState(1);
    return(
      <div>
        <span>
        <button onClick={function(){
            setId(1);
        }}>1</button>
        <button onClick={function(){
            setId(2);
        }}>2</button>
        <button onClick={function(){
            setId(3);
        }}>3</button>
        <button onClick={function(){
            setId(4);
        }}>4</button>
        <button onClick={function(){
            setId(5);
        }}>5</button>
        </span>
        <Todo id={id}/*id={Math.floor(Math.random() * 15)}*/></Todo>
      </div>
    )
  }
  function Todo({id}){
    const[todo,setTodo] = useState([]);
    useEffect(()=>{
      // setInterval(()=>{
      //   axios.get("https://sum-server.100xdevs.com/todo?id="+/*id*/ /*Math.ceil(Math.random() * 10)*/ id)
      //   .then(function(response){
      //     setTodo(response.data.todo);
      //   })
      // },3000);
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`/*id*/ /*Math.ceil(Math.random() * 10)*/)
        .then(function(response){
          setTodo(response.data.todo);
        })
      
    },[id])
    /**
     * Here in the dependencies array we must have to give the id as a dependencies otherwise it will just be rendered once at the start and
     * even though we kept changing the id of the component if its not in the dependencies array then it will not get re rendered whicvh is not a good thing.
     *  
     */
    return(
      <div>
        <h1>{todo.title}</h1>
        <h4>{todo.description}</h4>
      </div>
    )
  }
/**
 * 
 * So if you look carefully than you will see that as soon as the state varuiable that we have defined in the App function changes than the
 * Which id so as the state of id gets changed using setId ..... the App function will run or the return component will be re-rendered and
 * Now the returned is rerendered the id that the component is taking as input will also gets changed and that's why the 
 * UseEffect see in the dependencies array that id has changed and thus the componnet Todo will also get changed.
 * 
 */
//--------------------------------------------------------------------------------------------------------------------------------------------------------

//After first iteration-> I can also create that api now it is very easy. I just have to create an endpoint that takes id as a query and based on that
// we find that id in our database and then return it.and we can use the POST method to send that fetch call from our frontend with query parameter 
//id which is given by the user from the button or in the input box.

export default App
