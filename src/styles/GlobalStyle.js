import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --main-font: 'Red Hat Text', sans-serif;
    font-family: var(--main-font);
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export default GlobalStyle;
