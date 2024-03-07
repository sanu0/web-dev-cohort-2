const express = require('express');
const path = require('path');
// const cors = require('cors');
const app = express()
const port = 3000
app.use(express.json())


// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.get('/getSum', function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let reply = a + b;
    res.json(reply)
})

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+"/calc2.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})