const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://sanu0:sanu0123@cluster0.l7xzq0z.mongodb.net/user_app");

const User = mongoose.model('User', { 
    name : String,
    email : String,
    password : String
 });

// const user = new User({ 
//     name: 'Kumar Sanu',
//     email : 'kumarsanu@gmail.com',
//     password : '123456'
// });

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User.findOne({email : username})

    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    const user = new User({
        name: name,
        email : username,
        password : password
    });
    user.save();
    res.json({
        "msg" : "User created successfully"
    })
})



//So these many lines of code are enough to store the data in your database.
// kitty.save().then(() => console.log('meow'));
app.listen(3000);