import { screen } from '@testing-library/react';
import { ContainerAuth } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('ContainerAuth component', () => {
  it('renders correctly', () => {
    renderTheme(<ContainerAuth>Enviar</ContainerAuth>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});