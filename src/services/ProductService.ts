import axios from 'axios';
import backendConfig from '../config/backendConfig';
import { Product, Category } from '../models/Product';

const API_URL = `${backendConfig.baseURL}/products`; // Updated to use backendConfig

// Configura o axios para incluir o token JWT no cabeçalho
const getAuthHeaders = () => {
  const token = sessionStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const ProductService = {
  create: async (product: Product) => {
    const response = await axios.post(API_URL, product, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  getAll: async () => {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  getCategories: async () => {
    const response = await axios.get('http://localhost:8080/api/categories', {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },
};