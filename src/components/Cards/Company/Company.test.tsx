import { screen } from '@testing-library/react';
import { Company } from '.';
import { renderTheme } from '../../../styles/render-theme';

const company = {
  id: 'id',
  name: 'company',
  cnpj: '123',
  description: 'description',
} as any;

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {},
  };
});

describe('Card Company component', () => {
  it('renders correctly', () => {
    renderTheme(<Company company={company} />);

    expect(screen.getByText(company.name)).toBeInTheDocument();
    expect(screen.getByText(company.description)).toBeInTheDocument();
  });
});
