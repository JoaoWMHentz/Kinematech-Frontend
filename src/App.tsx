import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';
import Footer from './components/Footer';
import { Toolbar, Box } from '@mui/material';
import Categories from './components/Categories';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Toolbar /> {/* Compensa o espaço da AppBar */}
      <Categories /> {/* Adiciona o componente de categorias aqui */}
      
      <Box flex="1">
        <AppRoutes />
      </Box>
      
      <Footer /> {/* Footer sempre no final */}
    </Box>
  );
}