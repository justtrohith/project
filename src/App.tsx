import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlaceOrder from './pages/PlaceOrder';
import Restaurants from './pages/Restaurants';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Visualization from './pages/Visualization';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/visualization" element={<Visualization />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;