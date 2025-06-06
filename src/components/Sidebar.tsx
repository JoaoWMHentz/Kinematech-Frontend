import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link as RouterLink } from 'react-router-dom'


export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem
          component={RouterLink}
          to="/products"
          onClick={onClose}
          sx={{ cursor: 'pointer' }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/"
          onClick={onClose}
          sx={{ cursor: 'pointer' }}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>
      </List>
    </Drawer>
  )
}
