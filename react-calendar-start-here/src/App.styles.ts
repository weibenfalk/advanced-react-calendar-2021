import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url("./img/calendar_backdrop.jpg");
    margin: 0;
    height: 100vh;
  }
`;

export const StyledApp = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px;
`;
