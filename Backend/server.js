import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';
import ContactRoutes from './routes/Contact.Route.js';
import UserRoutes from './routes/User.Route.js';
import cors from 'cors';

dotenv.config();
const app = express();
const allowedOrigin = "https://web-fox-seven.vercel.app";

// CORS Middleware — put this **before any routes**
app.use(
  cors({
    origin: allowedOrigin, // exact origin, no "*"
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);



app.use(express.json());

// Connect to DB
connect();

// Routes
app.use('/api/contact', ContactRoutes);
app.use('/api/user', UserRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
