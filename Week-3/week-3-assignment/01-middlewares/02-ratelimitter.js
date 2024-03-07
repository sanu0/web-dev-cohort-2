const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


//this global clock is given to us. and it will keep many of our work done!
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)// so after every 1 second this numberofrequestforuser object gets initialised again and it will be empty again!

app.use(function(req,res,next){
  const userId = req.headers["user-id"];
  if(numberOfRequestsForUser[userId]){//we are here checking if the object has been init for the user or not
    numberOfRequestsForUser[userId]++;
    if(numberOfRequestsForUser[userId] > 5){
      res.status(404).send("rate limit exceeded!")
    }else{
      next();
    }
  }else{// So this is the first request, thats why it is in else code
    numberOfRequestsForUser[userId] = 1;
    next();
  }
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;

/**In real world these rate limiting checks are done using IPs
 * so that everyone can be sure of that the number of requests from a given IP
 * is fixed and not bombard the server with too many requests!
 */