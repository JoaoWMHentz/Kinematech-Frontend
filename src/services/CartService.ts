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
};

export default CartService;
