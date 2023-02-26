import React, { useState, useEffect } from 'react';
import {
  Typography,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { user } from '../../constants/mapConstants';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import Mission from '../Mission/Mission';
import DrawerButtonTheme from '../../styles/DrawerButton';
import { useDispatch } from 'react-redux';
import { active } from '../Store/module/globalmodal';
import { useRouter } from 'next/router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MyAppBar({
  onChangeTheme,
  mode,
}: {
  mode: Theme;
  onChangeTheme: any;
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
    <ThemeProvider theme={mode}>
      <Accordion defaultChecked={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}></AccordionSummary>
        <AccordionDetails>
          <div
            style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}
          >
            <SignOutGoogle />
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
            <Typography>
              <Switch onChange={() => onChangeTheme()} />
            </Typography>

            <Mission state={drawer} setState={setDrawer} />
          </div>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}

export default MyAppBar;
