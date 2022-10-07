import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10px;
  border-radius: 10px;
  background-color: #ccc;

  strong {
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.5rem;
    line-height: 1.2rem;
    color: #212121;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
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

  @media (max-width: 1200px) {
    width: 33%;
  }

  @media (max-width: 856px) {
    width: 49%;
  }

  @media (max-width: 540px) {
    width: 99%;
    align-items: center;
  }
`;
