import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { user } from '../../constants/mapConstants';
import newStore from '../Store/module';
import { darkTheme, lightTheme } from '../../styles/globalmode-style';
import { Theme, ThemeProvider, Switch } from '@mui/material';

function MyAppBar() {
  const [img, setImg] = useState<string | null>('');
  const [mode, setMode] = useState<Theme>(lightTheme);

  const isLogin = () => {
    return newStore.getState().persist.user.isLogin;
  };
  useEffect(() => {
    setImg(localStorage.getItem(user.userimgURL));
  }, []);

  const onChange = () => {
    if (mode === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={mode}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '5px',
          }}
        >
          <Typography variant="h6">Bep</Typography>
          <div style={{ display: 'flex' }}>
            <SignOutGoogle />
            {img !== null && isLogin() ? <Avatar src={img} /> : null}
            <Typography>
              <Switch onChange={onChange} />
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyAppBar;
