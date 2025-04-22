import { Box, Button, TextField, Typography, Divider, Paper } from '@mui/material'

export default function AuthPage() {
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
          borderRadius: 2,
          backgroundColor: 'white',
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
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth>
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
          />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Confirmar Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}