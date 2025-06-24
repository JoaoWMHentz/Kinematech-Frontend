import axios from 'axios';
import backendConfig from '../config/backendConfig';

const API_URL = `${backendConfig.baseURL}/users`; // Updated to use backendConfig

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const UserService = {
  // Função para verificar e-mail
  verifyEmail: async (token: string) => {
    const response = await axios.get(`${API_URL}/verify-email`, {
      params: { token },
      headers: getAuthHeaders(),
    });
    return response.data; // Retorna mensagem de sucesso ou erro
  },

  // Função para buscar usuário por e-mail
  getUserByEmail: async (email: string) => {
    const response = await axios.get(`${API_URL}/user`, {
      params: { email },
      headers: getAuthHeaders(),
    });
    return response.data; // Retorna os dados do usuário
  },

  // Função para atualizar usuário
  updateUser: async (updatedUser: any) => {
    const response = await axios.put(`${API_URL}/user`, updatedUser, {
      headers: getAuthHeaders(),
    });
    return response.data; // Retorna os dados atualizados do usuário
  },
};
