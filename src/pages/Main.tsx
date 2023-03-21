import React, { useState } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/globalmode-style';
import Map from '../components/Map/MapWrapper';
import styled from 'styled-components';

export default function Home() {
  const [mode, setMode] = useState<Theme>(lightTheme);
  const onChangeTheme: () => void = () => {
    if (mode === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };

  const StyledMainActive = styled.div`
    opacity: 1;
    width: 100%;
    height: 100%;
  `;

  return (
    <>
      <StyledMainActive>
        <ThemeProvider theme={mode}>
          <Map mode={mode} onChangeTheme={onChangeTheme} />
        </ThemeProvider>
      </StyledMainActive>
    </>
  );
}
