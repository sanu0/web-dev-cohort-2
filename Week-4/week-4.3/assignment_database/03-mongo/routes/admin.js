const { Router } = require("express");
const jwt = require('jsonwebtoken');
const jwtpassword = "123456789";
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db/index')
const router = Router();

async function userExists(username) {
    // write logic to return true or false if this user exists
    const exist = await Admin.findOne({
        username : username
    })
    if(exist){return true;}
    return false;
  }
// Admin Routes
router.post('/signup', async function(req, res){
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    if(userExists(username)){
        return res.status(403).json({
            msg : "Admin already exist"
        })
    }
    //check if a user with this username already exists
    try{
        await Admin.create({
            username : username,
            password : password
        })
        res.json({
            message : 'Admin created succesfully'
        })

    }catch(e){
        console.log(e);
    }
    
});

//Careful as here adminMiddleware is also checked and you have to send username and password in request headers.
router.post('/courses', adminMiddleware, async function(req, res){
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod can be used here
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
        //As key and value are same!
    })
    console.log(newCourse);
    res.json({
        msg : "Course created successfully",courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware, async function(req, res){
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses : response
    })
});

module.exports = router;