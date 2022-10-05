import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: RouteProps) => {
  const authenticated = false;
  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
