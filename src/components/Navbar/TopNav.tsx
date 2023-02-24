import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { user } from '../../constants/mapConstants';
import { darkTheme, lightTheme } from '../../styles/globalmode-style';
import { Theme, ThemeProvider, Switch } from '@mui/material';
import Mission from '../Mission/Mission';
import DrawerButtonTheme from '../../styles/DrawerButton';
import { useDispatch } from 'react-redux';
import { active } from '../Store/module/globalmodal';
import { useRouter } from 'next/router';

function MyAppBar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [img, setImg] = useState<string | undefined>('');
  const [mode, setMode] = useState<Theme>(lightTheme);
  const [drawer, setDrawer] = useState<boolean>(false);

  useEffect(() => {
    const newimg = sessionStorage.getItem(user.userimgURL);
    if (typeof newimg === 'string') {
      console.log(newimg);
      setImg(newimg);
    }
  }, [img]);

  const onChangeTheme = () => {
    if (mode === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };

  const HandleClickAvatar = () => {
    if (sessionStorage.getItem(user.userimgURL) && true) {
      return;
    }
    dispatch(active());
    router.reload();
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
          <div style={{ display: 'flex', gap: '10px' }}>
            <SignOutGoogle />
            <Avatar
              src={img}
              alt="User Profile Img provided by Google"
              onClick={HandleClickAvatar}
            />
            <ThemeProvider theme={DrawerButtonTheme}>
              <Avatar
                onClick={() => setDrawer(!drawer)}
                src="/img/startBtn.jpg"
              />
            </ThemeProvider>
            <Typography>
              <Switch onChange={onChangeTheme} />
            </Typography>

            <Mission state={drawer} setState={setDrawer} />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyAppBar;
