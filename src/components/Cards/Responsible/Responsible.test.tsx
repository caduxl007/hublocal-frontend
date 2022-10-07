import { screen } from '@testing-library/react';
import { Responsible } from '.';
import { renderTheme } from '../../../styles/render-theme';

const responsible = {
  id: 'id',
  name: 'responsible',
  telephone: '123',
  isMain: false,
} as any;

describe('Card Responsible component', () => {
  it('renders correctly', () => {
    renderTheme(<Responsible responsible={responsible} />);

    expect(screen.getByText(responsible.name)).toBeInTheDocument();
    expect(screen.getByText(responsible.telephone)).toBeInTheDocument();
    expect(screen.getByText('Não')).toBeInTheDocument();
  });
});
