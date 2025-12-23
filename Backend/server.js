import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';
import ContactRoutes from './routes/Contact.Route.js';
import UserRoutes from './routes/User.Route.js';
import cors from 'cors';

dotenv.config();
const app = express();

// ✅ Allowed frontend origin
const allowedOrigin = "https://web-fox-seven.vercel.app";

// 🟢 CORS configuration
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // allow cookies/auth
  })
);

// Handle preflight requests for all routes
app.options("*", cors({ origin: allowedOrigin, credentials: true }));

// Connect to MongoDB
connect();

// Body parser
app.use(express.json());

// Routes
app.use('/api/contact', ContactRoutes);
app.use('/api/user', UserRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
