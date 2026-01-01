import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import saleRoutes from './routes/SaleRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDb(); 

const app = express();

// --- CORS CONFIGURATION ---
// Important: Use only ONE cors configuration. 
// Remove the trailing slash from your Vercel URL.
app.use(cors({
 origin: [
  "https://company-dashboard-dab6ahxmo-harshidas-projects-8692e19e.vercel.app",
  "https://company-dashboard.vercel.app", 
  "http://localhost:3000"
],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json()); 

// API Routes 
app.use('/api/sales', saleRoutes);

// Root route for health check
app.get('/', (req, res) => {
  res.send('CRM Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));