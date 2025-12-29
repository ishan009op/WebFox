
import { sendVerificationEmail } from "../utils/ServiceVerification.js";


import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.model.js";


export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const verificationToken = crypto.randomBytes(32).toString("hex");

    const newUser = await User.create({
      name,
      email,
      verificationToken,
      isVerified: false,
      role: "user",
    });

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      message: "User created. Please verify your email.",
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



export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    // ✅ Generate JWT AFTER verification
    const jwtToken = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 🔁 Redirect to frontend with token
    res.redirect(
      `https://web-fox-seven.vercel.app/verify-success?token=${jwtToken}`
    );
  } catch (err) {
    res.status(500).json({ message: "Verification failed" });
  }
};

export const refresh=async(req,res)=>{

  try {
    const user = await User.findById(req.user.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    const newToken = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        isVerified: user.isVerified
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token: newToken });
  } catch (err) {
    res.status(500).json({ message: "Token refresh failed" });
  }

}