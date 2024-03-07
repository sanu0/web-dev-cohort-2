/**
 * Todo {
 *      title : string
 *      description : string
 *      completed : boolean
 * }
 */
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const TodoSchema = mongoose.Schema({ 
    title : String,
    description : String,
    completed : Boolean
 });
 const todo = mongoose.model('todo',TodoSchema);

 module.exports = {
    todo
 }