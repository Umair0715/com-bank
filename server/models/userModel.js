const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cardNumber : {
        type : String ,
        default: ''
    } ,
    cardholderType : {
        type : String ,
        default : ''
    } ,
    password : {
        type : String ,
        default : ''
    }
}, { timestamps : true })

const User = mongoose.model("User" , userSchema );
module.exports = User;