import mongoose from "mongoose";

const UserSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    createdAt:{
    type:Date,
    default:Date.now
}
})
const UserModel= mongoose.model("user",UserSchema)

export default UserModel