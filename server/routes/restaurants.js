import express from 'express';
import Restaurant from '../models/Restaurant.js';

const router = express.Router();

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get restaurant by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ 
      cuisine: { $regex: new RegExp(req.params.cuisine, 'i') }
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create restaurant
router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    restaurant_id: 'REST' + Math.random().toString(36).substr(2, 4).toUpperCase(),
    ...req.body
  });

  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update restaurant
router.put('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOneAndUpdate(
      { restaurant_id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
  try {
    await Restaurant.findOneAndDelete({ restaurant_id: req.params.id });
    res.json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;