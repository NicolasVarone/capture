import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1600px) {
      font-size: 75%;
    }
  }

  body {
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: 600;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }

  h2 {
    font-weight: 300;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: 600;
    font-size: 2rem;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: 600;
    color: #23d997;
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;
