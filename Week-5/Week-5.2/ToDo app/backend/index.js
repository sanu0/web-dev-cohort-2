const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();


//import { createTodo,updateTodo } from "./types";
const {createTodo,updateTodo} = require("./types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors(/*{
    origin : "http://localhost:5173"
}*/));
//now this backend is little insecure as it can be hit by anyone or any frontend not just the frontend we want it to get hit silently.

app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }else{
        //Here we are using await as there may be the case that the data may not be added to database and it still send the msg done to the frontend
        //So we await for the data to get added and only after that we send the json file to the frontend saying that the data has been added.
        //------------------------Things to be done in version 2-----------------------------------
        const item = await todo.findOne(createPayload);
        if(item){
            console.log("already added")
            return res.status(411).json({
                msg : "Todo is already added."
            })
            
        }
        //----------------------------------------------------------------------------------------
        await todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : createPayload.completed
        })
        return res.json({
            msg : "Todo created"
        })
    }
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({}); //This returns a promise so you have to await
    res.json({
        todos
    })

})
app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Something wrong with the input"
        })
        return;
    }
    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(3000);