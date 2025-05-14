import React from 'react';
import { Navigate } from 'react-router-dom';

interface RouteGuardProps {
  children: React.ReactNode;
}

export default function RouteGuard({ children }: RouteGuardProps) {
  const isAuthenticated = !!sessionStorage.getItem('authToken'); // Verifica se o token existe

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}