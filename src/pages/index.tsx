import React, { useState } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/globalmode-style';
import Map from '../components/Map/MapWrapper';
import LoginModal from '../components/Modal/Login';
import newStore from '../components/Store/module';
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

  const StyledMainDiv = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
  `;

  const StyledMainActive = styled.div`
    opacity: 1;
    width: 100%;
    height: 100%;
  `;

  return (
    <>
      {newStore.getState().persist.globalModal.modal === true ? (
        <StyledMainDiv>
          <LoginModal />

          <ThemeProvider theme={mode}>
            <Map mode={mode} onChangeTheme={onChangeTheme} />
          </ThemeProvider>
        </StyledMainDiv>
      ) : (
        <StyledMainActive>
          <LoginModal />

          <ThemeProvider theme={mode}>
            <Map mode={mode} onChangeTheme={onChangeTheme} />
          </ThemeProvider>
        </StyledMainActive>
      )}
    </>
  );
}
