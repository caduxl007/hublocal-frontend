import { screen } from '@testing-library/react';
import { Place } from '.';
import { renderTheme } from '../../../styles/render-theme';

const place = {
  id: 'id',
  name: 'place',
} as any;

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {},
  };
});

describe('Card Place component', () => {
  it('renders correctly', () => {
    renderTheme(<Place place={place} />);

    expect(screen.getByText(place.name)).toBeInTheDocument();
  });
});
