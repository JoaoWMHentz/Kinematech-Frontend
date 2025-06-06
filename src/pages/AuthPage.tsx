import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import para redirecionamento
import { Box, Button, TextField, Typography, Divider, Paper } from '@mui/material';
import { login, register } from '../services/authService';

export default function AuthPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLogin = async () => {
    try {
      const token = await login(loginEmail, loginPassword);
      console.log('Login bem-sucedido:', token);

      // Salvar o token na sessão
      sessionStorage.setItem('authToken', token);

      // Redirecionar para a página "Home"
      navigate('/home');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleRegister = async () => {
    if (registerPassword !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    try {
      const response = await register(registerName, registerEmail, registerPassword);
      console.log('Registro bem-sucedido:', response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          width: '80%',
          maxWidth: 800,
          padding: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
        }}
      >
        {/* Login Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ color: 'white' }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Box>

        {/* Divider */}
        <Divider orientation="vertical" flexItem sx={{ marginX: 2 }} />

        {/* Cadastro Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Cadastro
          </Typography>
          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <TextField
            label="Confirmar Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ color: 'white' }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}