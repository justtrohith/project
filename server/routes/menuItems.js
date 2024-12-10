import express from 'express';
import MenuItem from '../models/MenuItem.js';

const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get menu items by restaurant
router.get('/restaurant/:id', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ restaurant_id: req.params.id });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create menu item
router.post('/', async (req, res) => {
  const menuItem = new MenuItem({
    item_id: 'ITEM' + Math.random().toString(36).substr(2, 4).toUpperCase(),
    ...req.body
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update menu item
router.put('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndUpdate(
      { item_id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete menu item
router.delete('/:id', async (req, res) => {
  try {
    await MenuItem.findOneAndDelete({ item_id: req.params.id });
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;