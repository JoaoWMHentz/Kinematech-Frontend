import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes'
import { Toolbar, Box } from '@mui/material'
import axios from 'axios'
import Categories from './components/Categories'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Toolbar /> {/* Compensa o espaço da AppBar */}
      <Categories />
      <Box component="main" sx={{ p: 3 }}>
        <AppRoutes />
      </Box>
    </>
  )
}