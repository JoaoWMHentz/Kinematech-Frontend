import React, { useEffect, useState } from 'react';
import {
  Drawer,
  List,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import CartSidebarCard from './CartSidebarCard';
import CartService from '../services/CartService';
import { Product } from '../models/Product';
import { Cart, CartItem } from '../models/Cart';
import { useNavigate } from 'react-router-dom';


export default function CartSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const fetchCartItems = async () => {
        try {
          setLoading(true);
          const token = sessionStorage.getItem('authToken');
          if (!token) {
            throw new Error('Usuário não autenticado');
          }
          const cartData: Cart = await CartService.listCartItems(token);
          console.log('Itens do carrinho:', cartData.items);
          setCartItems(cartData.items);
        } catch (error) {
          console.error('Erro ao carregar itens do carrinho:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchCartItems();
    }
  }, [open]);

  const handleIncrement = async (id: string) => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (!token) {
        throw new Error('Usuário não autenticado');
      }

      const item = cartItems.find((item) => item.product.id === id);
      if (!item) {
        throw new Error('Item não encontrado no carrinho');
      }

      const difference = 1; // Incrementa em 1
      await CartService.addProductToCart(token, id, difference);

      // Atualizar a lista de itens do carrinho
      const cartData: Cart = await CartService.listCartItems(token);
      setCartItems(cartData.items);
    } catch (error) {
      console.error('Erro ao incrementar quantidade do produto:', error);
    }
  };

  const handleDecrement = async (id: string) => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (!token) {
        throw new Error('Usuário não autenticado');
      }

      const item = cartItems.find((item) => item.product.id === id);
      if (!item || item.quantity <= 1) {
        throw new Error('Quantidade inválida para decremento');
      }

      const difference = -1; // Decrementa em 1
      await CartService.addProductToCart(token, id, difference);

      // Atualizar a lista de itens do carrinho
      const cartData: Cart = await CartService.listCartItems(token);
      setCartItems(cartData.items);
    } catch (error) {
      console.error('Erro ao decrementar quantidade do produto:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (!token) {
        throw new Error('Usuário não autenticado');
      }

      await CartService.deleteProductFromCart(token, id);

      // Atualizar a lista de itens do carrinho
      const cartData: Cart = await CartService.listCartItems(token);
      setCartItems(cartData.items);
    } catch (error) {
      console.error('Erro ao deletar produto do carrinho:', error);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" gutterBottom>
          Carrinho ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </Typography>
        <Divider />
        <List>
          {loading ? (
            <Typography>Carregando itens do carrinho...</Typography>
          ) : (
            cartItems.map((item) => (
              <CartSidebarCard
                key={item.product.id}
                cartItem={item}
                onIncrement={() => handleIncrement(item.product.id)}
                onDecrement={() => handleDecrement(item.product.id)}
                onDelete={() => handleDelete(item.product.id)}
              />
            ))
          )}
        </List>
        <Divider />
        <Box>
          <Typography variant="body2">Subtotal: R$ {subtotal.toFixed(2)}</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleCheckout}
          >
            Continuar com a compra
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
