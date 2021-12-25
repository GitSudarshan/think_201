const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name:{
        type: String,
        trim: true

    },
    email:{
        type:String,
        unqiue:true,
        index:true,
        sparse:true,
    },
   phone:{
       type:Number,
       unique:true,
       index:true,
       sparse:true
   },
   photo:{
       type:String
       
   },
   degree:{
    type:String
   }


})


const User = mongoose.model('user_details',Userschema)
module.exports = User