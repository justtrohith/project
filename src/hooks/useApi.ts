import { useState, useCallback } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export function useApi<T>(endpoint: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, fetchData };
}

export async function createItem<T>(endpoint: string, data: T): Promise<T> {
  const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
  return response.data;
}

export async function updateItem<T>(endpoint: string, id: string, data: T): Promise<T> {
  const response = await axios.put(`${API_BASE_URL}${endpoint}/${id}`, data);
  return response.data;
}

export async function deleteItem(endpoint: string, id: string): Promise<void> {
  await axios.delete(`${API_BASE_URL}${endpoint}/${id}`);
}