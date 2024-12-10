import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  item_id: { type: String, required: true, unique: true },
  restaurant_id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  is_vegetarian: { type: Boolean, default: false },
  is_available: { type: Boolean, default: true }
});

export default mongoose.model('MenuItem', menuItemSchema);