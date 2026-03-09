import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const GuestRoute = ({ children }) => {
  const { isAuthenticated, isLoading, isAdmin } = useAuthStore();
  const location = useLocation();

  if (isLoading) return null;

  if (isAuthenticated) {
    const returnTo = location.state?.returnTo;
    if (isAdmin && location.pathname.startsWith('/admin')) {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to={returnTo || '/'} replace />;
  }

  return children;
};

export default GuestRoute;
