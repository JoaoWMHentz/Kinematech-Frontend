import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes'
import { Toolbar, Box } from '@mui/material'
import axios from 'axios'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  axios.interceptors.request.use(
    async (config) => {
      const token = sessionStorage.getItem('authToken');

      if (token && !config.url?.includes('/login')) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Toolbar /> {/* Compensa o espaço da AppBar */}
      <Box component="main" sx={{ p: 3 }}>
        <AppRoutes />
      </Box>
    </>
  )
}