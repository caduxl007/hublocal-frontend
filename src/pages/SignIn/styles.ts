import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(1);
  }
`;

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;

  animation: ${appearFromLeft} 0.4s;
`;

export const Content = styled.div`
  max-width: 44.8rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 2.5rem;

  > div:nth-of-type(1) {
    margin: 0 auto;
  }

  form {
    > div,
    button {
      margin-top: 4rem;
    }

    a {
      display: block;
      margin-top: 1rem;
    }
  }
`;
