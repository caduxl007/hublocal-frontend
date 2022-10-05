import styled, { css } from 'styled-components';

interface IInputProps {
  isError: boolean;
}

export const Container = styled.div<IInputProps>`
  ${({ theme, isError }) => css`
    max-width: 38rem;
    width: 100%;

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
      line-height: 1.2rem;
    }

    input {
      display: block;
      margin-top: repx;
      width: 100%;
      height: 4rem;
      padding-left: 5px;
      border: 1px solid
        ${(props) => (isError ? theme.colors.red_primary : '#424242')};
    }

    p {
      font-size: 1.2rem;
      color: ${theme.colors.red_primary};
    }
  `}
`;
