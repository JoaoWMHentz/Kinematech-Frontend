import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductsPage from '../pages/ProductsPage'
import AuthPage from '../pages/AuthPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}
