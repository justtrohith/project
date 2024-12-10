import express from 'express';
import Order from '../models/Order.js';
import Restaurant from '../models/Restaurant.js';
import Customer from '../models/Customer.js';

const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ order_date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get orders by customer
router.get('/customer/:id', async (req, res) => {
  try {
    const orders = await Order.find({ customer_id: req.params.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get orders by restaurant
router.get('/restaurant/:id', async (req, res) => {
  try {
    const orders = await Order.find({ restaurant_id: req.params.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Advanced Search: Get orders by date range and status
router.get('/search', async (req, res) => {
  try {
    const { startDate, endDate, status } = req.query;
    const query = {};
    
    if (startDate && endDate) {
      query.order_date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }
    
    if (status) {
      query.status = status;
    }
    
    const orders = await Order.find(query).sort({ order_date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Advanced Search: Get top customers by order value
router.get('/top-customers', async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: '$customer_id',
          totalSpent: { $sum: '$total_amount' },
          orderCount: { $sum: 1 }
        }
      },
      {
        $sort: { totalSpent: -1 }
      },
      {
        $limit: 10
      }
    ]);

    // Fetch customer details
    const customerIds = result.map(item => item._id);
    const customers = await Customer.find({ customer_id: { $in: customerIds } });

    const enrichedResult = result.map(item => ({
      ...item,
      customer: customers.find(c => c.customer_id === item._id)
    }));

    res.json(enrichedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create order
router.post('/', async (req, res) => {
  const order = new Order({
    order_id: 'ORD' + Math.random().toString(36).substr(2, 4).toUpperCase(),
    ...req.body
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update order status
router.put('/:id/status', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { order_id: req.params.id },
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;