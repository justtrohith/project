import React, { useEffect, useState} from 'react';
import { useApi, createItem, updateItem, deleteItem } from '../hooks/useApi';
import { Restaurant } from '../types';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

const Restaurants = () => {
  const { data: restaurants, loading, error, fetchData } = useApi<Restaurant[]>('/restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    address: '',
    opening_time: '',
    closing_time: '',
    phone: '',
    rating: 0,
  });

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'cuisine', label: 'Cuisine' },
    { key: 'rating', label: 'Rating' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
    { key: 'rating', label: 'Rating' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingRestaurant) {
        await updateItem('/restaurants', editingRestaurant.restaurant_id, formData);
      } else {
        await createItem('/restaurants', formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error('Error saving restaurant:', error);
    }
  };

  const handleEdit = (restaurant: Restaurant) => {
    setEditingRestaurant(restaurant);
    setFormData((s) => {return {...s,...restaurant}});
    setIsModalOpen(true);
  };

  const handleDelete = async (restaurant: Restaurant) => {
    if (window.confirm('Are you sure you want to delete this restaurant?')) {
      try {
        await deleteItem('/restaurants', restaurant.restaurant_id);
        fetchData();
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  } 
  , []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Restaurants</h1>
        <button
          onClick={() => {
            setEditingRestaurant(null);
            setFormData({
              name: '',
              cuisine: '',
              address: '',
              opening_time: '',
              closing_time: '',
              phone: '',
              rating: 0,
            });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Restaurant
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <DataTable
          columns={columns}
          data={restaurants || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingRestaurant ? 'Edit Restaurant' : 'Add Restaurant'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cuisine</label>
            <input
              type="text"
              value={formData.cuisine}
              onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Opening Time</label>
              <input
                type="time"
                value={formData.opening_time}
                onChange={(e) => setFormData({ ...formData, opening_time: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Closing Time</label>
              <input
                type="time"
                value={formData.closing_time}
                onChange={(e) => setFormData({ ...formData, closing_time: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {editingRestaurant ? 'Update' : 'Create'} Restaurant
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Restaurants;