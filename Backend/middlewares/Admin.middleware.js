import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  const email = req.headers["x-user-email"]; // for dev/testing only
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  const user = await User.findOne({ email });
  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  req.user = user;
  next();
};
