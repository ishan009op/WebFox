import User from "../models/User.model.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/ServiceVerification.js";

export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = await User.create({
      name,
      email,
      verificationToken,
      isVerified: false,
    });

    // send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      message: "User created. Please check your email to verify your account.",
      user: { name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
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

export const EmailVerify=async(req,res)=>{
     try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).send("Invalid or expired token");

    user.isVerified = true;
    user.verificationToken = undefined; // remove token after verification
    await user.save();

    res.send("Email verified successfully! You can now login.");
  } catch (err) {
    res.status(500).send("Server error");
  }
}