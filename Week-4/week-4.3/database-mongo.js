const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

app.use(express.json());


mongoose.connect(
  //"your_mongo_url",
  "mongodb+srv://sanu0:sanu0123@cluster0.l7xzq0z.mongodb.net/"
);


//Defining schema
/**This is the way to create two table schemas and then using moongoose.model()
 * we can also create its instances on ou database. As we run the moongoose.model()
 * command, a new table is made with the name given to the moongoose.model as the first argument
 * 
 */
//-----------------------------------------------------------------------
const UserSchema = new mongoose.Schema({
  email : String,
  password : String,
  purchasedCourses : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
  title : String,
  price : Number
})

const user = mongoose.model('User',UserSchema);
const course = mongoose.model('Course',CourseSchema);

//-----------------------------------------------------------------------

//--------------------------READ-----------------------------------------
/**user.findById("45362789");
 * 
 * user.findOne({
 *    username : "harkirat@gmail.com"
 * })
 * 
 * user.find({
 *    username : "harkirat@gmail.com"
 * })
 * So findOne will only find the single occurenece and return boolean if it is or not
 * find will find multiple occurences.
*/
//-------------------------------------------------------------------------

//--------------------------------------UPDATE------------------------------
/**
 * user.updateOne({
 *  id : "1"
 * },{
 *  password : "new password"
 * })
 * 
 * user.update({},{
 *  premium : true;
 * }) 
 * update({},{things you wanna update!}) This will update all the occurences in the database!
 * 
 */
//-----------------------------------------------------------------------------

//-------------------------------DELETE----------------------------------------
  /**
   * user.deleteMany({});
   * This will delete everything in your database so don't call this ever!
   * user.deleteOne({
   *      username : harkirat@gmail.com
   * })
   * This will only delete one only!
   */
//------------------------------------------------------------------------------
//Endpoints
app.get('/', function(req, res){
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})