import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  button {
    padding: 0.8rem;
    border-radius: 10px;
    font-weight: bold;
  }

  border-bottom: 1px solid ${({theme}) => theme.colors.white};

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: ${({theme}) => theme.colors.blue};
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
