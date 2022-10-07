import { screen } from '@testing-library/react';
import { ContentCards } from '.';
import { renderTheme } from '../../../styles/render-theme';

describe('ContentCards component', () => {
  it('renders correctly', () => {
    renderTheme(<ContentCards>Cards</ContentCards>);

    expect(screen.getByText('Cards')).toBeInTheDocument();
  });
});
