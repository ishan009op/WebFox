import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';
import ContactRoutes from './routes/Contact.Route.js';
import UserRoutes from './routes/User.Route.js';
import AdminRoutes from './routes/Admin.Route.js'
import cors from 'cors';

dotenv.config();
const app = express();

// ✅ Simple CORS - Allow all origins temporarily to test
// app.use(cors({
//   origin: '*', // Test with this first
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));
app.use(cors({
  origin: 'https://web-fox-seven.vercel.app', // Specific origin, NOT '*'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser
app.use(express.json());

// Test route to verify server is working
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Connect to MongoDB
connect();

// Routes
app.use('/api/contact', ContactRoutes);
app.use('/api/user', UserRoutes);
app.use('/api/admin', AdminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});