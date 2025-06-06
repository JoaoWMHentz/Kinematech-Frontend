import axios from "axios";
import backendConfig from "../config/backendConfig";

const CartService = {
  addProductToCart: async (token: string, productId: string, quantity: number) => {
    try {
      const response = await axios.post(
        `${backendConfig.baseURL}/cart/add`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            productId,
            quantity,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },

  listCartItems: async (token: string) => {
    try {
      const response = await axios.get(`${backendConfig.baseURL}/cart/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error();
    }
  },

  deleteProductFromCart: async (token: string, productId: string): Promise<void> => {
    try {
      const response = await axios.delete(
        `${backendConfig.baseURL}/cart/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            productId,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Erro ao deletar produto do carrinho');
      }
    } catch (error: any) {
      throw new Error(error.response?.data || 'Erro ao deletar produto do carrinho');
    }
  },
};

export default CartService;
