const { resolve } = require('path');
const User = require('../models/userModel');


exports.register = async ( req , res , next) => {
    const { cardNumber , cardholderType , password } = req.body;
    if(!cardNumber || !cardholderType || !password){
        return res.status(400).json({
            status : 'failed',
            message : 'All Fields are required.'
        })
    }
    try{
        const user = await User.findOne({ cardNumber });
        if(user){
            return res.status(400).json({
                status : 'failed',
                message : 'User already exist with this card.'
            })
        }
        await User.create({
            cardNumber , cardholderType , password
        })
        return res.status(201).json({
            status : "success",
            message : 'Registered Successfully. Please login.'
        })

    }catch(err){
        console.log('register error' , err)
        return res.status(500).json({
            status : "error",
            message : 'Something went wrong. '
        })
    }
}

exports.login = async ( req , res , next) => {
    const { cardNumber , password } = req.body;
    
    try{
        const user = await User.create({ cardNumber , password })
        return res.status(200).json({
            status : 'success',
            message : 'Logged in Successfully.' ,
            user 
        })
    }catch(err){
        console.log('login err', err)
        return res.status(500).json({
            status : "error",
            message : 'Something went wrong. '
        })
    }
}