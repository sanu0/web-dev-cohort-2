// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

//state,component
//In react if you wanna define a state variable then do it like the specified way and you only then react will watch it and re render the component when the
//state changes.
import { useState } from 'react';
// let state = {
//   count : 0
// }
function App() {//This is our component
  //const [count, setCount] = useState(0); //[1,2]
  //Now lets built a ToDo application
  //Till now we are using state which is just a single number but for ToDos app we need a state which is and array of objects
  /**
   * 
  //  */
  // const [todos, setTodos] = useState([{
  //   title : "Go to gym",
  //   description : "Go to gym from 9 to 10",
  //   completed : false
  // },{
  //   title : "Go to school",
  //   description : "Go to school from 11 to 4",
  //   completed : false
  // }])

  // //We also have the setTodo state updater so we can have a dynamic todo application here as well.
  // function addTodo(){
  //   //1,2
  //   //[...todos,3] => [1,2,3]
  //   setTodos([...todos,{
  //     title : "new Todo",
  //     description : "desc of new todo"
  //   }])
  // }
  // return (
  //   <div>
  //     <button onClick={addTodo}>Add random todo</button>
  //     {/* <Todo title = {todos[0].title} description = {todos[0].description}></Todo>
  //     <Todo title = {todos[1].title} description = {todos[1].description}></Todo> */}

  //     {
  //       //Whenever wanna write any js script here then write it in the curly brackets
  //       todos.map(function(todos){
  //         return <Todo title={todos.title} description = {todos.description}></Todo>
  //       })
  //     }
  //   </div>
  //)
  const[string, SetString] = useState("Do you love me ? ");
  function onClickHandler(){
    SetString(string + "Fuck off");
  }
  return(
    <div>
      <button onClick={onClickHandler}>{string}</button>
    </div>
  )
}

//In above the <CustomButton> tag is like we are calling the function we have created which is returning an html tag and we are giving it two 
//Inputs count which is our state as count and stateUpdater setCount as setCount. 
//This is our own component

//So the props is the argument this function is taking and props is like an object which takes input element from above as they are it's element.
//so with state we also give state updater as its input or the state and state updater are the elements of the object of props.


// function CustomButton(props){//This take state as input
//   function onClickHandler(){
//     props.setCount(props.count + 1);//So it is not like getting just state as a input but state updater as an input as well and here it is the setCount.
//   }
//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }

function Todo(props){

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
