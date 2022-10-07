import styled from 'styled-components';

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.white};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 2rem;

      svg {
        cursor: pointer;
      }
    }
  }

  h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
  }

  > p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }

  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
`;
