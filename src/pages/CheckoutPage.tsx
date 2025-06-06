import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from '@mui/material';
import CardCheckout from '../components/CardCheckout';
import CartService from '../services/CartService';
import { Cart, CartItem } from '../models/Cart';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [shippingOptions, setShippingOptions] = useState([
    { id: 'standard', label: 'Standard - R$ 7,99', price: 7.99 },
    { id: 'express', label: 'Express - R$ 15,99', price: 15.99 },
  ]);
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem('authToken');
        if (!token) {
          throw new Error('Usuário não autenticado');
        }
        const cartData: Cart = await CartService.listCartItems(token);
        setCartItems(cartData.items);
      } catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

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

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
  const shippingCost = shippingOptions.find((option) => option.id === selectedShipping)?.price || 0;
  const total = subtotal + shippingCost;

  return (
    <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
      {/* Esquerda */}
      <Box sx={{ flex: 2 }}>
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Produtos no carrinho</Typography>
          <Divider sx={{ marginY: 2 }} />
          <List>
            {loading ? (
              <Typography>Carregando itens do carrinho...</Typography>
            ) : (
              cartItems.map((item) => (
                <CardCheckout
                  key={item.product.id}
                  cartItem={item}
                  onIncrement={() => handleIncrement(item.product.id)}
                  onDecrement={() => handleDecrement(item.product.id)}
                  onDelete={() => handleDelete(item.product.id)}
                />
              ))
            )}
          </List>
        </Paper>

        <Paper sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Opções de Frete</Typography>
          <Divider sx={{ marginY: 2 }} />
          <RadioGroup
            value={selectedShipping}
            onChange={(e) => setSelectedShipping(e.target.value)}
          >
            {shippingOptions.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </Paper>

        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Método de Pagamento</Typography>
          <Divider sx={{ marginY: 2 }} />
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="creditCard"
              control={<Radio />}
              label="Cartão de Crédito"
            />
            <FormControlLabel
              value="boleto"
              control={<Radio />}
              label="Boleto Bancário"
            />
            <FormControlLabel
              value="pix"
              control={<Radio />}
              label="Pix"
            />
          </RadioGroup>
        </Paper>
      </Box>

      {/* Direita */}
      <Box sx={{ flex: 1 }}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Resumo da Compra</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
            <Typography>Produto</Typography>
            <Typography>R$ {subtotal.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
            <Typography>Frete</Typography>
            <Typography>R$ {shippingCost.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <Typography>Você pagará</Typography>
            <Typography>R$ {total.toFixed(2)}</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() => console.log('Finalizar compra')}
          >
            Finalizar Compra
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
