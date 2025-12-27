import User from '../models/User.model.js'
import crypto from 'crypto'
import { sendVerificationEmail } from '../utils/ServiceVerification.js';
export const addUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: "User already exists" });

  // generate random verification token
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const newUser = await User.create({
    name,
    email,
    verificationToken,
  });

  // send verification email
  await sendVerificationEmail(email, verificationToken);

  res.status(201).json({
    message: "User created. Please check your email to verify your account.",
    user: { name: newUser.name, email: newUser.email },
  });
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

export const EmailVerify=async(req,res)=>{
    const { token } = req.params;
  const user = await User.findOne({ verificationToken: token });
  if (!user) return res.status(400).send("Invalid token");

  user.isVerified = true;
  user.verificationToken = undefined; // remove token
  await user.save();

  res.send("Email verified successfully! You can now login.");
}