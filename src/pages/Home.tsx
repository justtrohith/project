import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Store, ShoppingBag, Users, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Restaurant Management System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/order" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <UtensilsCrossed className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Place Order</h2>
              <p className="text-gray-600">Create new orders for customers</p>
            </div>
          </div>
        </Link>

        <Link to="/restaurants" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <Store className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Restaurants</h2>
              <p className="text-gray-600">Manage restaurant information</p>
            </div>
          </div>
        </Link>

        <Link to="/orders" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Orders</h2>
              <p className="text-gray-600">Track and manage orders</p>
            </div>
          </div>
        </Link>

        <Link to="/customers" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-orange-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Customers</h2>
              <p className="text-gray-600">Customer management</p>
            </div>
          </div>
        </Link>

        <Link to="/visualization" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <BarChart className="w-8 h-8 text-red-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Visualization</h2>
              <p className="text-gray-600">Data insights and analytics</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;