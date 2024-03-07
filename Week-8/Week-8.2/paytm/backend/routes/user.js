const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken")
const {User,Account} = require("../db")
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("../middleware");

const router = express.Router();

// This is the the input validation schema using zod for the signUp body that user has to give while signing up
const signupBody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})


// This is the schema for signIn input validation
const signinBody = zod.object({
    username : zod.string().email(),
    password : zod.string(),
})

// This is the schema of update body
const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
})


//Endpoint to signup ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post("/signup", async function(req,res){

    //----------Signup body input validation----------------------//
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    //--------------------------------------------------------------//


    const existingUser = await User.findOne({
        username: req.body.username
    })
    //Find this method called findOne() to check if the there is any row in database with same element as given.
    //It will return true if there is any.

    if (existingUser) {
        return res.status(411).json({
            message: "Username already taken"
        })
    }

    //After input validation, checking that the username given is unique or no such user exists, only then we create the user.
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;


    //Here with the userId that is generated we also create a row in the Accounts table as well and initialize the balance randomly.
    const account = await Account.create({
        userId : userId,
        balance : 1 + Math.floor(Math.random() * 10000)
    })

    


    //Use .create method when you wanna insert something inside the database
    //now after user row for a specific user has been added to the database we create the jwt token for it and also send them.
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*****************************************POST*******************************************/
//What signIn endpoint does is that
router.post("/signin", async function(req,res){
    //---------------------SignIn body input validation--------------------//
    const {success} = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    //-----------------------------------------------------------------------//

    //similarly here first we do input validationa nd then we check wheather there is an entry in the user table for this user or not.
    //Now in signIn endpoint we only consider when the user exist and not when the user does not exist.
    const input = req.body;
    const response = await User.findOne({
        username : input.username,
        password : input.password
    })
    if(!response){
        return res.status(411).json({
            message : "Incorrect Username or password"
        })
    }else{
        const userId = response._id;
        const token = jwt.sign({
            userId
        },JWT_SECRET);
        return res.status(200).json({
            token : token
        }) 
    }

});

//*****************************************PUT*******************************************/
//Here we first authenticate the user using the middleware and then with the request having the new userId attached to it, 
//In this route we update the row of users with that userid with whatever be the field is given to the req body


router.put('/',authMiddleware,async(req,res) =>{
    
    const success = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg : "Wrong input format"
        })
    }
    if(req.body.password != undefined){
        const result = await User.updateOne({
            _id : req.userId
        },{
            $set : { password : req.body.password}
        })
    }
    if(req.body.lastName != undefined){
        const result = await User.updateOne({
            _id : req.userId
        },{
            $set : { lastName : req.body.lastName}
        })
        console.log(result)
    }
    if(req.body.firstName != undefined){
        const result = await User.updateOne({
            _id : req.userId
        },{
            $set : { firstName : req.body.firstName}
        })
    }
    
    res.status(200).json({
        message : "Updated successfully"
    })
    
})
//*****************************************GET*******************************************/

//This end point will return the usernames, firstname and lastna of those user whose either firstname or lastname matches with the filter
//given to it.
router.get('/bulk',async(req,res)=>{
    const filter = req.query.filter || "";

    /**Way to find the data who is either matche with firstName or lastName */
    const response = await User.find({
        $or : [
            {firstName : {
                "$regex" : filter
            }},
            {lastName : {
                "$regex" : filter
            }}  
        ]
    })

    /**This is the way to map only certain things that you wanna see and not the whole thing at once */
    /**This mapping is very important as it consist of only certain things that other user has access to see. */
    res.json({
        user : response.map(user => ({
            username : user.username,
            firstname : user.firstName,
            lastname : user.lastName,
            _id : user._id
        }))
    })
})


module.exports = router;