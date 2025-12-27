import User from "../models/User.model.js"

export const isAdmin = async (req, res, next) => {
  const email = req.headers["x-user-email"]; // for dev/testing only
  if (!email) return res.status(401).json({ message: "Unauthorized" });

 const user = await User.findOne({ email });
if (!user || !user.isVerified) {
  return res.status(403).json({ message: "Please verify your email first" });
}
if (user.role !== "admin") {
  return res.status(403).json({ message: "Admin only" });
}
req.user = user;
next();



  
};
