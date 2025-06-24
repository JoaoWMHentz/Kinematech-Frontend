import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import para redirecionamento
import { Box, Button, TextField, Typography, Divider, Paper, IconButton } from '@mui/material';
import { login, register } from '../services/authService';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function AuthPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerDocument, setRegisterDocument] = useState('');
  const [documentError, setDocumentError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      const response = await register(registerName, registerEmail, registerPassword, registerDocument);
      console.log('Registro bem-sucedido:', response);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const validateCPF = (cpf: string): boolean => {
    // Lógica de validação de CPF
    let sum = 0;
    let remainder;
    if (cpf === '00000000000') return false;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  const validateCNPJ = (cnpj: string): boolean => {
    // Lógica de validação de CNPJ
    if (cnpj.length !== 14) return false;

    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const calculateDigit = (cnpj: string, weights: number[]): number => {
      let sum = 0;
      for (let i = 0; i < weights.length; i++) {
        sum += parseInt(cnpj[i]) * weights[i];
      }
      const remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const digit1 = calculateDigit(cnpj, weights1);
    const digit2 = calculateDigit(cnpj, weights2);

    return (
      digit1 === parseInt(cnpj[12]) && digit2 === parseInt(cnpj[13])
    );
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
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
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
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[!@#$%^&*()_+={}|\[\]\\:;"'<>,.?/`]/g, '');
              setRegisterName(sanitizedValue);
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerEmail}
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
              setRegisterEmail(sanitizedValue);
            }}
          />
          <TextField
            label="CPF ou CNPJ"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerDocument}
            onChange={(e) => {
              const input = e.target.value.replace(/[^0-9]/g, '');
              let formattedValue = input;

              if (input.length <= 11) {
                // Format as CPF
                formattedValue = input
                  .replace(/(\d{3})(\d)/, '$1.$2')
                  .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
                  .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
              } else if (input.length <= 14) {
                // Format as CNPJ
                formattedValue = input
                  .replace(/(\d{2})(\d)/, '$1.$2')
                  .replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                  .replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4')
                  .replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');
              }

              setRegisterDocument(formattedValue);

              // Validation logic
              const isValidCPF = input.length === 11 && validateCPF(input);
              const isValidCNPJ = input.length === 14 && validateCNPJ(input);
              setDocumentError(!isValidCPF && !isValidCNPJ);
            }}
            inputProps={{ maxLength: 18 }}
            autoComplete="on"
          />
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={registerPassword}
            onChange={(e) => {
              const input = e.target.value;
              setRegisterPassword(input);

              // Validation logic
              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              setPasswordError(!passwordRegex.test(input));
            }}
            InputProps={{
              endAdornment: (
                <IconButton size="small"  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Confirmar Senha"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={confirmPassword}
            onChange={(e) => {
              const input = e.target.value;
              setConfirmPassword(input);

              // Validation logic
              setConfirmPasswordError(input !== registerPassword);
            }}
            InputProps={{
              endAdornment: (
                <IconButton size="small"  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          {/* Error Messages Box */}
          {documentError || passwordError || confirmPasswordError ? (
            <Box sx={{ border: '1px solid red', padding: 2, marginBottom: 2, borderRadius: 2, width: '100%' }}> 
              {documentError && (
                <Typography color="error" variant="body2">
                  CPF ou CNPJ inválido.
                </Typography>
              )}
              {passwordError && (
                <Typography color="error" variant="body2">
                  A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 símbolo.
                </Typography>
              )}
              {confirmPasswordError && (
                <Typography color="error" variant="body2">
                  A confirmação de senha deve ser igual à senha.
                </Typography>
              )}
            </Box>
          ) : null}

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