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
    enum:["graphic-design","branding","digital-marketing","consultation"],
    required:true
},
desc:{
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