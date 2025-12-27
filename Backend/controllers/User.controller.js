import User from "../models/User.model.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/ServiceVerification.js";


export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create new user
    const newUser = await User.create({
      name,
      email,
      verificationToken,
      isVerified: false,
    });

    // Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
      console.log("Verification email sent to:", email);
    } catch (err) {
      console.error("Failed to send verification email:", err.message);
      // optional: you can delete the user here if email fails
      // await User.deleteOne({ _id: newUser._id });
      return res.status(500).json({
        message: "User created but failed to send verification email",
        error: err.message,
      });
    }

    // Respond success
    res.status(201).json({
      message: "User created. Please check your email to verify your account.",
      user: { name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    console.error("Error in addUser:", err.message);
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
    user.verificationToken = undefined; // remove token
    await user.save();

    res.send("Email verified successfully! You can now login.");
  } catch (err) {
    console.error("Error verifying email:", err.message);
    res.status(500).send("Server error");
  }
}