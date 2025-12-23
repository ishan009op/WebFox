import mongoose from "mongoose";

const ContactSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
budget:{
    type:Number,
    required:true
},

lookingFor:{
    type:String,
    enum:['website','design','video edit','thumbnail','socialmedia post','logo','animations'],
    required:true
},
description:{
    type:String,
    required:true
},
createdAt:{
    type:Date,
    default:Date.now
}
})

const ContactModel= mongoose.model("Contact",ContactSchema)

export default ContactModel