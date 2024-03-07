const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken")
const {User,Account} = require("../db")
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");

const router = express.Router();
/**This endpoint of accounts route will take only the authorization header and after adding userId to the req.userId 
 * What then we do is that by taking that userId, we find the row in accounts table and get the balance. 
*/
router.get('/balance' ,authMiddleware, async(req,res)=>{
    const userId = req.userId;
    const account =  await Account.findOne({
        userId
    })
    if(account){
        //console.log(account)
        return res.status(200).json({
            balance : account.balance
        })
    }
    return res.status(411).json({
        msg : "Something went wrong!!"
    })
})

router.post('/transfer',authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();

    //-------------------------------------------------Between startTransactiona and commitTransaction---------------------------------------------------------
    session.startTransaction();
    const{amount , to} = req.body;
    //fetch the accounts within the transaction
    const account = await Account.findOne({userId : req.userId}).session(session);

    if(!account || account.balance < amount){ // if userid not found or the balance is less than the amount to send then retuen this message.
        await session.abortTransaction();
        return res.status(400).json({
            msg : "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userId : to}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message : "Invalid Account"
        })
    }

    //Perform the transfer
    await Account.updateOne({userId : req.userId}, {$inc : {balance : -amount}}).session(session);
    await Account.updateOne({userId : to}, {$inc : {balance : amount}}).session(session);

    //commit the transfer
    await session.commitTransaction();
    //----------------------------------------------------------------------------------------------------------------------------------

    res.json({
        message : "Transfer successful"
    })
})


module.exports = router;