import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 30rem;
  width: 100%;
  border-radius: 10px;
  background-color: #ccc;

  strong {
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.5rem;
    line-height: 1.2rem;
    color: #212121;
  }

  > div {
    margin-top: 10px;

    svg {
      cursor: pointer;
    }

    svg:nth-of-type(2) {
      margin-left: 10px;
    }
  }

  @media (max-width: 856px) {
    max-width: 40rem;
  }

  @media (max-width: 540px) {
    width: 99%;
    align-items: center;
    text-align: center;
  }
`;
