import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ review_date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get reviews by restaurant
router.get('/restaurant/:id', async (req, res) => {
  try {
    const reviews = await Review.find({ restaurant_id: req.params.id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get reviews by customer
router.get('/customer/:id', async (req, res) => {
  try {
    const reviews = await Review.find({ customer_id: req.params.id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create review
router.post('/', async (req, res) => {
  const review = new Review({
    review_id: 'REV' + Math.random().toString(36).substr(2, 4).toUpperCase(),
    ...req.body
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update review likes
router.put('/:id/like', async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate(
      { review_id: req.params.id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;