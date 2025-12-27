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
    role: {
  type: String,
  enum: ["user", "admin"],
  default: "user"
}
,
isVerified: { type: Boolean, default: false }, // new field
  verificationToken: String,  
    createdAt:{
    type:Date,
    default:Date.now
}
})
const UserModel= mongoose.model("user",UserSchema)

export default UserModel