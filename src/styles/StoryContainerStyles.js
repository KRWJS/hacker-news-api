import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #FFFFFF;
    color: #000000;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: 0 auto;
`;
