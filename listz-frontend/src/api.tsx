import axios from 'axios';

// Define TypeScript interface for the Item model
export interface Item {
  id: number;
  name: string;
  quantity: number;
}

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5027/api', // The backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all items from the backend
export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// You can add more methods for POST, PUT, DELETE as needed