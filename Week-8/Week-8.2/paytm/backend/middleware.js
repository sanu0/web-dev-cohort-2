const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./config");

/**This is middleware which is used for authetication and whenever we need any endpoint whose access must be given to authenticated users only then we use
 * This middleware. In this we first take the authentication token from the header (Bearer <token>) an then if authenticated we add the userId to the 
 * request body of the request it take and then next() it.
 */

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            message  :"Invalid Token",
        })
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        req.userId = decoded.userId;
        next();
    }catch(e){
        console.log(e)
        return res.status(403).json({
            message : "Invalid token"
        })
    }

}

module.exports = {authMiddleware};