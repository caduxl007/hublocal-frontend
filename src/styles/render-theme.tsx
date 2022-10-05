import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>);
};
