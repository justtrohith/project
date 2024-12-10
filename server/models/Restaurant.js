import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  restaurant_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true },
  opening_time: { type: String, required: true },
  closing_time: { type: String, required: true },
  rating: { type: Number, required: true },
  phone: { type: String, required: true }
});

export default mongoose.model('Restaurant', restaurantSchema);