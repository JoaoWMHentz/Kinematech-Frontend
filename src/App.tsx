import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppRoutes from './routes'
import { Toolbar, Box } from '@mui/material'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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