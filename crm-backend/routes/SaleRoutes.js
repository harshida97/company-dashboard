import express from 'express';
import { getSales, createSale } from '../controllers/saleController.js';

const router = express.Router();

router.get('/', getSales);    // Fetching sales 
router.post('/', createSale); // Adding a new sale 

export default router;