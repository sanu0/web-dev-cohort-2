const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./config");

const userId = "65b63ef7219cbe535b2f5d9c"
const token = jwt.sign({userId} , JWT_SECRET);

console.log(token);
