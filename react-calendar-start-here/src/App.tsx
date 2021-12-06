import React from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <p>Start here</p>
    </StyledApp>
  );
};

export default App;
