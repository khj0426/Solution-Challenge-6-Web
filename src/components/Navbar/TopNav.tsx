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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DonateList from '../Mission/Donate/DonateList';
import styled from 'styled-components';
import Image from 'next/image';
import { setMissonNotClear } from '../Store/module/misson/clearMisson';

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
  const [missonDrawer, setMissonOpen] = useState<boolean>(false);
  const [donatelistDrawer, setDonateListOpen] = useState<boolean>(false);

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
    <>
      <div
        style={{
          display: 'flex',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <StyledUserPoint>
          <Image
            src="/img/point.png"
            alt="유저의 포인트"
            width={30}
            height={30}
          />
          <span style={{ color: 'black' }}>
            {sessionStorage.getItem('userPoint')}
          </span>
        </StyledUserPoint>
        <div onClick={() => setDonateListOpen(!donatelistDrawer)}>
          <FormatListBulletedIcon
            style={{ color: '#fff', cursor: 'pointer' }}
          />
        </div>
        {img && true ? <SignOutGoogle /> : null}
        <Typography>
          <label>
            <Switch onChange={() => onChangeTheme()} />
          </label>
        </Typography>
        <Avatar
          src={img}
          alt="User Profile Img provided by Google"
          onClick={HandleClickAvatar}
          sx={{ width: 30, height: 30 }}
        />
        <ThemeProvider theme={DrawerButtonTheme}>
          <Avatar
            onClick={() => {
              setMissonOpen(!missonDrawer);
              dispatch(setMissonNotClear());
            }}
            src="/img/startBtn.jpg"
            sx={{
              width: 30,
              height: 30,
              position: 'fixed',
              bottom: '0',
              right: '0',
            }}
            alt="toggle button that open misson"
          />
        </ThemeProvider>
        <DonateList state={donatelistDrawer} setState={setDonateListOpen} />
      </div>
      <Mission state={missonDrawer} setState={setMissonOpen} />
    </>
  );
}

const StyledUserPoint = styled.div`
  background: #ffffff;
  width: 100px;
  cursor: pointer;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  font-weight: 500;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;
export default MyAppBar;
