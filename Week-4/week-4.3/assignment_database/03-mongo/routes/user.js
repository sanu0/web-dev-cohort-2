const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')

// User Routes
router.post('/signup', async function(req, res){
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    .then(function(data){
        if(data){
            res.json({
                message: "User created succesfully"
            })
        } else{
            res.status(403).json({
                message: "Something went wrong!"
            })
        }
    })

    // await User.create({
    //     username,
    //     password
    // })
    // res.json({
    //     message: 'User created successfully'
    // })
});

router.get('/courses', async function(req, res){
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, function(req, res){
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username : username
    },
    {
        "$push" : {purchasedCourses : courseId}
    })
    .then(function(data){
        if(data){
            res.json({
                msg : "Course purchased successfully"
            })
        }else{
            res.json({
                msg : "Course not purchased successfully"
            })
        }
    })


});

router.get('/purchasedCourses', userMiddleware, async function(req, res){
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    
    User.findOne({
        username
    })
    .then(function(data){
        if(data){
            console.log(data);
            res.json({
                msg : data.purchasedCourses
            })
        }else{
            res.status(403).json({
                msg : "Something wrong with the inputs!"
            })
        }
    })
});

module.exports = router