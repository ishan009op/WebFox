import User from '../models/User.model.js'

export const addUser=async(req,res)=>{
    const {name,email}=req.body
    const user=await User.findOne({email})
    if(user){
        return res.json("user elready existed")
    }
    const newUser= await User.create({
        name,email
    })
    res.json(newUser)
}

export const viewUsers=async(req,res)=>{
    const users=await User.find({})
    res.json(users)
}

export const singleUser=async(req,res)=>{
    const {id}=req.params

    const user= await User.findOne({_id:id})
    res.json(user)
}