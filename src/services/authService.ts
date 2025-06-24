import axios from 'axios';
import backendConfig from '../config/backendConfig';

const API_URL = `${backendConfig.baseURL}/users`; // Updated to use backendConfig

// Função para login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data; // Retorna o token ou os dados do usuário
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao fazer login');
  }
};

// Função para registro
export const register = async (name: string, email: string, password: string, document: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      document,
    });
    return response.data; // Retorna a mensagem de sucesso ou dados adicionais
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao fazer registro');
  }
};

export const isUserLoggedIn = (): boolean => {
  const token = sessionStorage.getItem('authToken');
  return !!token; // Returns true if token exists, otherwise false
};