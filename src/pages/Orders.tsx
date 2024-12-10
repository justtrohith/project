import React, { useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { Order, Restaurant, Customer } from '../types';
import DataTable from '../components/DataTable';

const Orders = () => {
  const { data: orders, loading, error, fetchData } = useApi<Order[]>('/orders');
  const { data: restaurants } = useApi<Restaurant[]>('/restaurants');
  const { data: customers } = useApi<Customer[]>('/customers');

  const columns = [
    { key: 'order_id', label: 'Order ID' },
    { key: 'customer_name', label: 'Customer' },
    { key: 'restaurant_name', label: 'Restaurant' },
    { key: 'status', label: 'Status' },
    { key: 'total_amount', label: 'Total Amount' },
    { key: 'order_date', label: 'Order Date' }
  ];

  const enrichedOrders = orders?.map(order => {
    const restaurant = restaurants?.find(r => r.restaurant_id === order.restaurant_id);
    const customer = customers?.find(c => c.customer_id === order.customer_id);
    return {
      ...order,
      customer_name: customer?.name || 'Unknown',
      restaurant_name: restaurant?.name || 'Unknown',
      total_amount: `$${order.total_amount.toFixed(2)}`,
      order_date: new Date(order.order_date).toLocaleDateString()
    };
  }) || [];

  useEffect(() => {
    fetchData();
  }
  , [fetchData]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <DataTable columns={columns} data={enrichedOrders} />
      )}
    </div>
  );
};

export default Orders;