import React, { useState } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/globalmode-style';
import Map from '../components/Map/MapWrapper';
import LoginModal from '../components/Modal/Login';
import newStore from '../components/Store/module';

export default function Home() {
  const [mode, setMode] = useState<Theme>(lightTheme);

  const onChangeTheme: () => void = () => {
    if (mode === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };
  return (
    <>
      <article>
        {newStore.getState().persist.globalModal.modal && true ? (
          <LoginModal />
        ) : null}

        <ThemeProvider theme={mode}>
          <Map mode={mode} onChangeTheme={onChangeTheme} />
        </ThemeProvider>
      </article>
    </>
  );
}
