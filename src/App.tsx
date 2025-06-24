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
        sx={{
        background: 'linear-gradient(to right,rgb(216, 239, 255),rgb(246, 248, 250))',
        py: 6,
        px: 2,
      }}
    >
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Toolbar /> {/* Compensa o espaço da AppBar */}
      
      <Box flex="1">
        <AppRoutes />
      </Box>
      
      <Footer /> {/* Footer sempre no final */}
    </Box>
  );
}