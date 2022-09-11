const {mongoose} = require('../config/db')



let userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password_hash:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","teacher","student"],
        default:"student"
    }
    
},{
    timestamps:true
});

module.exports = {userSchema,mongoose};