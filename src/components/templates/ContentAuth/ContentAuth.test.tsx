import { screen } from '@testing-library/react';
import { ContentAuth } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('ContentAuth component', () => {
  it('renders correctly', () => {
    renderTheme(<ContentAuth>Enviar</ContentAuth>);

    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });
});