const mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://sanu0:sanu0123@cluster0.l7xzq0z.mongodb.net/paytm"
)

// const userSchema = new mongoose.Schema({
//     userName : String,
//     firstName : String,
//     lastName : String,
//     password : String
// })
/**This was the basic way but it is not the best way or the way we should do so we must use the way it is given below */

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountsSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
}) 


const User = mongoose.model("User" , userSchema);
const Account = mongoose.model("Accounts",accountsSchema);

module.exports = { 
    User,
    Account
}