import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import { light } from '../styles/themes';
import { AuthProvider } from './AuthContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </AuthProvider>
  );
}
