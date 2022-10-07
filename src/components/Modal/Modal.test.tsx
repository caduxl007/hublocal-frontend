import { screen } from '@testing-library/react';
import { ModalContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Modal component', () => {
  it('renders correctly', () => {
    renderTheme(
      <ModalContent isModalOpen={true} onCloseModal={() => {}}>
        <h2>Modal</h2>
      </ModalContent>,
    );

    expect(screen.getByText('Modal')).toBeInTheDocument();
  });
});
