import React, { useState, useEffect } from 'react';
import { Typography, Avatar } from '@mui/material';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { user } from '../../constants/mapConstants';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import Mission from '../Mission/Mission';
import DrawerButtonTheme from '../../styles/DrawerButton';
import { useDispatch } from 'react-redux';
import { active } from '../Store/module/globalmodal';
import { useRouter } from 'next/router';

export type propsFunction = () => void;
function MyAppBar({
  onChangeTheme,
}: {
  mode: Theme;
  onChangeTheme: propsFunction;
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [img, setImg] = useState<string | undefined>('');
  const [drawer, setDrawer] = useState<boolean>(false);

  useEffect(() => {
    const newimg = sessionStorage.getItem(user.userimgURL);
    if (typeof newimg === 'string') {
      setImg(newimg);
    }
  }, [
    typeof window !== 'undefined' && sessionStorage.getItem(user.userimgURL),
  ]);

  const HandleClickAvatar = () => {
    if (sessionStorage.getItem(user.userimgURL) && true) {
      return;
    }
    dispatch(active());
    router.reload();
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
        height: 'auto',
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <SignOutGoogle />
      <Typography>
        <Switch onChange={() => onChangeTheme()} />
      </Typography>
      <Avatar
        src={img}
        alt="User Profile Img provided by Google"
        onClick={HandleClickAvatar}
        sx={{ width: 30, height: 30 }}
      />
      <ThemeProvider theme={DrawerButtonTheme}>
        <Avatar
          onClick={() => setDrawer(!drawer)}
          src="/img/startBtn.jpg"
          sx={{ width: 30, height: 30 }}
        />
      </ThemeProvider>

      <Mission state={drawer} setState={setDrawer} />
    </div>
  );
}

export default MyAppBar;
