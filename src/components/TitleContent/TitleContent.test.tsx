import { screen } from '@testing-library/react';
import { TitleContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('TitleContent component', () => {
  it('renders correctly', () => {
    renderTheme(<TitleContent>Enviar</TitleContent>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});