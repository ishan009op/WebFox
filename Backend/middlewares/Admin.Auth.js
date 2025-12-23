// middleware/adminAuth.js
import Admin from "../models/Admin.model.js";

 const adminAuth = async (req, res, next) => {
  const userEmail = req.body.email || req.query.email;

  try {
    const isAdmin = await Admin.findOne({ email: userEmail });
    if (!isAdmin) {
      return res.status(403).json({ message: "Access denied: Admin only" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
export default adminAuth
