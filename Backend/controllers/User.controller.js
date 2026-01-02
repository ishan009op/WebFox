
import User from "../models/User.model.js";


export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    

    const newUser = await User.create({
      name,
      email,
      role: "user",
    });

    

    res.status(201).json({
     newUser
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};



export const viewUsers=async(req,res)=>{
    const users=await User.find({})
    res.json(users)
}

export const singleUser=async(req,res)=>{
    const {id}=req.params

    const user= await User.findOne({_id:id})
    res.json(user)
}


