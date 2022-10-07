import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface RouteProps {
  children: ReactElement;
  isAuthenticate?: boolean;
}

export function ProtectedRoute({ children, isAuthenticate }: RouteProps) {
  const { token } = useAuth();

  if (!token && isAuthenticate) {
    return <Navigate to="/" />;
  }

  if (token && !isAuthenticate) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
