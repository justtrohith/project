import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  registration_date: { type: Date, default: Date.now }
});

export default mongoose.model('Customer', customerSchema);