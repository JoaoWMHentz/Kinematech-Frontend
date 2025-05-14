import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import AuthPage from '../pages/AuthPage';
import AccountPage from '../pages/AccountPage'; // Importando a nova página
import ProductCreatePage from '../pages/ProductCreatePage'; // Importando a nova página
import RouteGuard from '../components/RouteGuard';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<div>404 - Página não encontrada</div>} />

      {/* Rota protegida */}
      <Route
        path="/account"
        element={
          <RouteGuard>
            <AccountPage />
          </RouteGuard>
        }
      />
      <Route
        path="/product/create"
        element={
          <RouteGuard>
            <ProductCreatePage />
          </RouteGuard>
        }
      />
    </Routes>
  );
}
