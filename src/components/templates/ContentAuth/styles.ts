import styled from 'styled-components';

export const Container = styled.div`
  margin: 5rem auto;
  max-width: 800px;

  form {
    > div {
      display: flex;
      justify-content: space-between;

      > div {
        margin-right: 10px;
        width: 100%;
        margin-top: 40px;

        @media (max-width: 560px) {
          margin-top: 25px;
          max-width: 100%;
        }
      }

      @media (max-width: 560px) {
        flex-direction: column;
      }
    }

    button {
      margin-right: auto;
      margin-top: 4rem;
      max-width: 20rem;
    }

    input[type=checkbox] {
      width: 4rem;
    }
  }
`;
