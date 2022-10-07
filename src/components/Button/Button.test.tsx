import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Button component', () => {
  it('renders correctly', () => {
    renderTheme(<Button>Enviar</Button>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});