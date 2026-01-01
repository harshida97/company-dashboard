import Sale from '../models/Sale.js';

// Get all sales
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find().sort({ createdAt: -1 });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sales" }); // [cite: 46]
  }
};

//  Create a new sale
export const createSale = async (req, res) => {
  try {
    const { saleName, status, amount, stage, saleDate, nextActivity } = req.body;

    // Basic Validation: Required fields 
    if (!saleName || !status || !amount || !stage || !saleDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newSale = await Sale.create({
      saleName, status, amount, stage, saleDate, nextActivity
    });

    res.status(201).json(newSale); 
  } catch (error) {
    res.status(500).json({ error: "Server error during save" }); 
  }
};