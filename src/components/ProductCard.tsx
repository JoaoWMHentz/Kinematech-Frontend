import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate
import { Card, CardMedia, CardContent, CardActions, Button, Typography, IconButton, Box, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CartService from '../services/CartService';
import { isUserLoggedIn } from '../services/authService';
import { Product } from '../models/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Hook para navegação

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleDetailsClick = () => {
    navigate(`/product/${product.id}`); // Navega para a página de detalhes do produto
  };

  const handleAddToCart = async () => {
    try {
      if (!isUserLoggedIn()) {
        throw new Error('Usuário não autenticado');
      }
      const token = sessionStorage.getItem('authToken');
      await CartService.addProductToCart(token!, product.id, quantity);
      alert('Produto adicionado ao carrinho com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      alert('Erro ao adicionar produto ao carrinho');
    }
  };

  return (
    <Card
      sx={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.1s, box-shadow 0.1s',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        width="320"
        image={product.thumbnail}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description || 'Sem descrição disponível'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          R$ {product.price?.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Button size="small" variant="contained" color="primary" onClick={handleDetailsClick}>
          Detalhes
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small" onClick={handleDecrement}>
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ style: { textAlign: 'center', height: '10px' }, min: 1 }}
            sx={{ width: 50 }}
            disabled
          />
          <IconButton size="small" onClick={handleIncrement}>
            <AddIcon />
          </IconButton>
        </Box>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
      
    </Card>
  );
}