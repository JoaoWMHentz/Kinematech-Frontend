import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users'; // Substitua pela URL correta do backend

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
export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data; // Retorna a mensagem de sucesso ou dados adicionais
  } catch (error: any) {
    throw new Error(error.response?.data || 'Erro ao registrar');
  }
};