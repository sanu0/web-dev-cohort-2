import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([{
    id: 1,
    title : "Go to gym",
    description : "Go to gym between 7 to 9"
  },{
    id: 2,
    title : "Go to school",
    description : "Go to school between 9 to 10"
  },{
    id: 3,
    title : "Eat lunch",
    description : "Also share it with your friend."
  }])
  let idTodo = 4
  function addTodo(){
    setTodo([...todo,{
      id : idTodo++,
      title : Math.random(),
      description : Math.random(),
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todo.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description = {todo.description}></Todo>//we add key attribute so to get react to differentiate between 
        //different components and key is used to uniquely identify.
      })}
    </div>
  )
}
function Todo({key,title,description}){
  return <div>
    <p>--------------------------------------------------------</p>
    <h1>{key}</h1>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App
/**
 * This code has a major bug you can look up into the console
 * "Each child in a list should have a unique "key" prop."
 * Key tells React which array item each component correponds to so, that it can match up them later. This
 * becomes important if your array items can move, (sorted), gets inserted, or get deleted. A well chosen key helps 
 * React infer what exactly has happened and make the correct updates to the DOM tree.
 * Rather than generating keys on the fly, you should include them in your data.
 * 
 * 
 * So whenever you rendering a list so make sure you have a unique identifier of each element in the list.
 * When you neeed a key whenever you are iterating over an array!
 * 
 */