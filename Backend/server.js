import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';
import ContactRoutes from './routes/Contact.Route.js';
import UserRoutes from './routes/User.Route.js';
import cors from 'cors';

dotenv.config();
const app = express();

// ✅ CORS configuration (must be first)
const allowedOrigins = [
  "https://web-fox-seven.vercel.app",
  "http://localhost:5173", // for local development
  "http://localhost:3000"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

// Body parser
app.use(express.json());

// Connect to MongoDB
connect();

// Routes
app.use('/api/contact', ContactRoutes);
app.use('/api/user', UserRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});