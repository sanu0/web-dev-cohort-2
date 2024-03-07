//Todos is an array of objects 
/**
 * 
 * todos = [
 *    {
 *      title : "Go to gym"
 *      description : "Go ty gym between 7 to 9"
 *    }
 * ]
 */

import { useEffect, useState } from "react";

//this is the function that helps the rerendering our custom component when we gonna click on the button!

export function Todos({todos, setTodos}){
    

    return <div>
        {todos.map(function(todo){
         
        //What does this syntax do is that it loop over all the element of todos array and every element of the array 
        //(we name it todo just like i)todo, we write it's title and description 
        //and if it's completed then write completed and mark as completed button will be there
        //console.log(todo);
            function onClickHandler(){
                fetch("http://localhost:3000/completed",{
                    method : "PUT",
                    body : JSON.stringify({
                        // title : document.getElementById("title").value,
                        // description : document.getElementById("description").value
                        //This is one way to do it but we use react just to get away from it.
                        id : todo._id
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(async function(res){
                    alert("Todo Updated");
                })
                //setTodos(todo.completed = true);
            }
        
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button  onClick={onClickHandler}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                <h1>{todo.completed == true ? "true" : "false"}</h1>
            </div>
        })}
    </div>
    
}