import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UtensilsCrossed, Store, ShoppingBag, Users, BarChart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/order" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <UtensilsCrossed size={20} />
              <span>Place Order</span>
            </Link>
            <Link to="/restaurants" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Store size={20} />
              <span>Restaurants</span>
            </Link>
            <Link to="/orders" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <ShoppingBag size={20} />
              <span>Orders</span>
            </Link>
            <Link to="/customers" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Users size={20} />
              <span>Customers</span>
            </Link>
            <Link to="/visualization" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <BarChart size={20} />
              <span>Visualization</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;