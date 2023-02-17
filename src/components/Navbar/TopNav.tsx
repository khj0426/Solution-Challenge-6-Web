import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import { SigninGoogle } from '../Login/SignInGoogle';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { user } from '../../constants/mapConstants';
import newStore from '../Store/module';

function MyAppBar() {
  const [img, setImg] = useState<string | null>('');

  const isLogin = () => {
    return newStore.getState().persist.user.isLogin;
  };
  useEffect(() => {
    setImg(sessionStorage.getItem(user.userimgURL));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar
        style={{ display: 'flex', justifyContent: 'space-evenly', gap: '5px' }}
      >
        <Typography variant="h6">Bep</Typography>
        <div style={{ display: 'flex' }}>
          <SigninGoogle />
          <SignOutGoogle />
          {img !== null && isLogin() ? <Avatar src={img} /> : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
