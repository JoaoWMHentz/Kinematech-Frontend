import axios from 'axios';
import backendConfig from '../config/backendConfig';

const API_URL = `${backendConfig.baseURL}/addresses`; // Updated to use backendConfig

// Função para buscar endereço por ID do cliente
export const getAddressByCustomerId = async (customerId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${customerId}`);
    return response.data; // Retorna os dados do endereço
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao buscar endereço');
  }
};

// Função para criar endereço associado ao cliente
export const createAddress = async (address: any, customerId: string) => {
  try {
    const response = await axios.post(`${API_URL}/${customerId}`, address);
    return response.data; // Retorna os dados do endereço criado
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao criar endereço');
  }
};

// Função para deletar endereço
export const deleteAddress = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao deletar endereço');
  }
};
