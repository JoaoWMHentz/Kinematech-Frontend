import React from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartItem } from '../models/Cart';

export default function CartSidebarCard({
  cartItem,
  onIncrement,
  onDecrement,
}: {
  cartItem: CartItem;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box sx={{ width: '100%', height: '100%' }}>
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
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {cartItem.product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            R$ {cartItem.product.price?.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" onClick={onDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography>{cartItem.quantity}</Typography>
            <IconButton size="small" onClick={onIncrement}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}