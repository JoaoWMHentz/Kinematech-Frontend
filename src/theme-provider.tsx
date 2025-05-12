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
    },
  },
})


export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
