import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green_secundary};
    border-radius: 6px;
    color: ${theme.colors.text};
    font-weight: bold;
    padding: 1rem 2.4rem;
    transition: 0.3s;
    width: 100%;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
