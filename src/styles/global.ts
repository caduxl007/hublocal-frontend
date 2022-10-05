import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
    --xl: 10rem;

    --font: 'Roboto Slab', sans-serif;

    --background: #ccc;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;

    @media (max-width: 768px) {
      font-size: 57.75%;
    };

    @media (max-width: 400px) {
      font-size: 53%;
    };
  }

  html, body, #root{
    scroll-behavior: smooth;
    height: 100%;
    font-family: var(--font);
  }

  body {
    scroll-behavior: smooth;
    background-color: var(--background);
    min-height: 100vh;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-size: var(--small);
  }

  a {
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  body, input, button {
    font-family: var(--font);
    font-size: 1.6rem;
  }
`;
