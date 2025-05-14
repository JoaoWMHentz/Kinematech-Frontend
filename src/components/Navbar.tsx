import { AppBar, Toolbar, IconButton, Box, TextField, InputAdornment, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o token está presente no sessionStorage
    const token = sessionStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);


  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'background.default', color: 'secundary.main', paddingX: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box
          component="img"
          src="/logo.svg"
          alt="BotzStore"
          sx={{ height: 50, cursor: 'pointer' }}
          onClick={onMenuClick}
        />

        {/* Caixa de Pesquisa */}
        <TextField
          placeholder="Pesquisar produtos..."
          variant="outlined"
          size="small"
          sx={{
            flexGrow: 1,
            maxWidth: 400,
            marginX: 2,
            backgroundColor: 'background.default',
            borderRadius: 1,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Botões à direita */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {isLoggedIn ? (
            <Button
              variant="outlined"
              startIcon={<AccountCircleIcon />}
              sx={{ color: 'primary.main', borderColor: 'primary.main' }}
              onClick={() => navigate('/account')} // Redireciona para a página da conta
            >
              Acessar Conta
            </Button>
          ) : (
            <Button
              variant="outlined"
              startIcon={<AccountCircleIcon />}
              sx={{ color: 'primary.main', borderColor: 'primary.main' }}
              onClick={() => navigate('/auth')} // Redireciona para a página de login
            >
              Login
            </Button>
          )}
          <IconButton sx={{ color: 'primary.main' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
