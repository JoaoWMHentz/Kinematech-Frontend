import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartItem } from '../models/Cart';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardCheckout({
  cartItem,
  onIncrement,
  onDecrement,
  onDelete,
}: {
  cartItem: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        marginBottom: 2,
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '15%', height: '100%' }}>
        <img
          src={cartItem.product.thumbnail}
          alt={cartItem.product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 4,
          }}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {cartItem.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cartItem.product.description || 'Sem descrição disponível'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {cartItem.product.price?.toFixed(2)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton size="small" onClick={onDecrement}>
          <RemoveIcon />
        </IconButton>
        <Typography>{cartItem.quantity}</Typography>
        <IconButton size="small" onClick={onIncrement}>
          <AddIcon />
        </IconButton>
        <IconButton size="small" color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
