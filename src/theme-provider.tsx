"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00a2e5', // Azul
    },
    secondary: {
      main: '#5c7481', // Cinza
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          color: '#ffffff', // Define o texto dos botões como branco
        },
        outlined: {
          color: '#00a2e5', // Define o texto dos botões outlined como azul
          borderColor: '#00a2e5', // Define a borda dos botões outlined como azul
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root[class*="MuiInputBase-sizeSmall"]': {
            height: '38px', // Define a altura para campos com size="small"
          },
          '& .MuiInputBase-input[class*="MuiInputBase-sizeSmall"]': {
            padding: '8px 14px', // Ajusta o padding para centralizar o texto
          },
        },
      },
    },
  },
});

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
