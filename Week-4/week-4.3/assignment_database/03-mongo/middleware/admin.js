const { Admin } = require('../db/index');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456789";

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const existUser = await Admin.findOne({
        username : username,
        password : password
    })
    if(existUser){
        const value = {
            username : username,
            password : password
        }
        const token = jwt.sign(value,jwtPassword);
        next();
    }else{
        res.status(403).json({
            msg : "Admin doesn't exist"
        })
    }
}

module.exports = adminMiddleware;