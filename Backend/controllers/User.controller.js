
import { sendVerificationEmail } from "../utils/ServiceVerification.js";


import jwt from "jsonwebtoken";
import crypto from "crypto";
import User from "../models/User.model.js";


export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // 1. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Email verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // 3. Create user
    const newUser = await User.create({
      name,
      email,
      verificationToken,
      isVerified: false,
      role: "user",
    });

    // 4. Send verification email
    await sendVerificationEmail(email, verificationToken);

    // 5. Generate JWT (AUTH token)
    const jwtToken = jwt.sign(
      {
        userId: newUser._id,
        role: newUser.role,
        isVerified: newUser.isVerified,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 6. Response
    res.status(201).json({
      message: "User created. Verify your email.",
      token: jwtToken,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isVerified: newUser.isVerified,
      },
    });
  } catch (err) {
    console.error("Error in addUser:", err.message);
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

export const EmailVerify=async(req,res)=>{
    try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).send("Invalid or expired token");

    user.isVerified = true;
    user.verificationToken = undefined; // remove token
    await user.save();

    res.send("Email verified successfully! You can now login.");
  } catch (err) {
    console.error("Error verifying email:", err.message);
    res.status(500).send("Server error");
  }
}