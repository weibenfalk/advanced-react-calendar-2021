import React from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  const [hatches, setHatches] = React.useState<HatchType[]>(
    localStorage.calendar ? JSON.parse(localStorage.calendar) : createCalendar()
  );

  // Store calendar in localStorage
  React.useEffect(() => {
    localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  const handleClickHatch = React.useCallback((nr: number): void => {
    setHatches(prev => prev.map(hatch => (hatch.nr === nr ? { ...hatch, open: !hatch.open } : hatch)));
  }, []);

  const isHatchEnabled = React.useCallback((nr: number): boolean => {
    const date = new Date();

    const day = date.getUTCDate();
    const month = date.getMonth(); // starts with 0, meaning that 11 = dec
    const year = date.getFullYear();

    if (year > 2021) return true;
    if (month === 11 && nr <= day) return true;

    return false;
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      {hatches.map(hatch => (
        <Hatch key={hatch.nr} hatch={hatch} handleClick={handleClickHatch} enabledCallback={isHatchEnabled} />
      ))}
    </StyledApp>
  );
};

export default App;
