import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create customer
router.post('/', async (req, res) => {
  const customer = new Customer({
    customer_id: 'CUST' + Math.random().toString(36).substr(2, 4).toUpperCase(),
    ...req.body
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update customer
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { customer_id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete customer
router.delete('/:id', async (req, res) => {
  try {
    await Customer.findOneAndDelete({ customer_id: req.params.id });
    res.json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;