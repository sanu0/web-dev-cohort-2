const express = require("express");
const cors = require('cors')
//const bodyParser = require("body-parser");
const secret = require("./config")
const jwt = require('jsonwebtoken')

const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1" , rootRouter);



app.listen(3000, ()=>{
    console.log("server running on port 3000 ...");
});


