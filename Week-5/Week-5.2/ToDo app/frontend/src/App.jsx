import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  },[todos])
  // fetch("http://localhost:3000/todos").then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
    //this is the wrong way as when we rerender this, the control reaches to start of the App function and it again fetch and it again setTodos and the 
    //Things goes on an on like this which you will see as the infinite fetch request being keep sent on the network tab if you inspect
    //So infinitely app getting called again and again!
    // we can use useEffect hook for this... useState was one hook and useEffect is another hook and this will let you get away from this issue!
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
      
    </div>
  )
}

export default App
