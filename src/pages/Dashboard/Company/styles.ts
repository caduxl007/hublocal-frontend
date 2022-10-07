import styled from 'styled-components';

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  h2 {
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;
