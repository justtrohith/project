import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  customer_id: { type: String, required: true },
  restaurant_id: { type: String, required: true },
  order_date: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  total_amount: { type: Number, required: true },
  delivery_fee: { type: Number, required: true },
  payment_method: { type: String, required: true },
  delivery_address: { type: String, required: true }
});

export default mongoose.model('Order', orderSchema);