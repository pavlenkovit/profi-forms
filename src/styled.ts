import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    font-size: 17px;
    color: #333;
  }

  body header,main,div,span,input {
    box-sizing: border-box;
  }

`;

export const Container = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;
