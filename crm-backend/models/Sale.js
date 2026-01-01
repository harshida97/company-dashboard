import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  saleName: { type: String, required: true }, 
  status: { 
    type: String, 
    required: true, 
    enum: ['Open', 'Lost', 'Sold', 'Stalled'] 
  },
  amount: { type: Number, required: true }, 
  stage: { type: String, required: true }, 
  saleDate: { type: String, required: true }, 
  nextActivity: { type: String }, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Sale', saleSchema);