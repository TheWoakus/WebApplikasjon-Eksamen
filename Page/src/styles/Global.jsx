import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 14px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.8rem;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  ${normalize}
`;
