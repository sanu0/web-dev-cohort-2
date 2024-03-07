import { useState } from "react";

export function CreateTodo(){
    //React-query -> you create the local state var here in this component

    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding : 10,
            margin : 10,
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /><br />
        <input id="description" style={{
            padding : 10,
            margin : 10,
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} /><br />

        <button style={{
            padding : 10,
            margin : 10,
        }} onClick={
            ()=>{
                fetch("http://localhost:3000/todo",{
                    method : "POST",
                    body : JSON.stringify({
                        // title : document.getElementById("title").value,
                        // description : document.getElementById("description").value
                        //This is one way to do it but we use react just to get away from it.

                        title : title,
                        description : description,
                        completed : false
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    const check = {msg : "Todo is already added."};
                    if(JSON.stringify(json) === JSON.stringify(check)){
                        alert("Todo Already Added!");
                    }else{
                        alert("Todo added");
                    }
                })
            }
        }>Add a todo</button>
    </div>
}

// This is our custom component