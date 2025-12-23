import express from "express"
import adminAuth from "../middlewares/Admin.Auth.js"
import Admin from '../models/Admin.model.js'

const router=express.Router()

router.post("/check", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  const admin = await Admin.findOne({ email });
  res.json({ isAdmin: !!admin });
});

// Example protected route
router.get("/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Welcome to admin dashboard!" });
});

export default router