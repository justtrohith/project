import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  review_id: { type: String, required: true, unique: true },
  customer_id: { type: String, required: true },
  restaurant_id: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review_text: { type: String },
  review_date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  food_rating: { type: Number, required: true, min: 1, max: 5 },
  service_rating: { type: Number, required: true, min: 1, max: 5 },
  delivery_rating: { type: Number, required: true, min: 1, max: 5 }
});

export default mongoose.model('Review', reviewSchema);