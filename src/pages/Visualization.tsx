import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { useApi } from '../hooks/useApi';
import { Restaurant, Order } from '../types';

const Visualization = () => {
  const { data: restaurants, fetchData: restroFetchDate } = useApi<Restaurant[]>('/restaurants');
  const { data: orders, fetchData: ordersFetchData } = useApi<Order[]>('/orders');

  const restaurantRatings = restaurants?.map(restaurant => ({
    name: restaurant.name,
    rating: restaurant.rating
  })) || [];

  const ordersByRestaurant = orders?.reduce((acc: { [key: string]: number }, order) => {
    acc[order.restaurant_id] = (acc[order.restaurant_id] || 0) + 1;
    return acc;
  }, {});

  const orderData = restaurants?.map(restaurant => ({
    name: restaurant.name,
    orders: ordersByRestaurant?.[restaurant.restaurant_id] || 0
  })) || [];

  useEffect(() => {
    restroFetchDate();
    ordersFetchData();
  }
  , [restroFetchDate, ordersFetchData]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Data Visualization</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Restaurant Ratings</h2>
          <BarChart width={500} height={300} data={restaurantRatings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rating" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Orders by Restaurant</h2>
          <LineChart width={500} height={300} data={orderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Visualization;