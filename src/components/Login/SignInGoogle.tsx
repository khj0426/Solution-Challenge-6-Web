import { auth } from '../../api/instance/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { msg, user } from '../../constants/mapConstants';
import { getAccessToken } from '../../api/authorization';
import loginBtntheme from '../../styles/LoginButton';
import { ThemeProvider, Button } from '@mui/material';
import { deactive } from '../Store/module/globalmodal';

import { useRouter } from 'next/router';

export const SigninGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user.getIdToken());
        if (res.user.email && res.user.displayName) {
          const username = res.user.displayName;
          const email = res.user.email;
          const password = 'google';
          getAccessToken({ username, email, password });
          window.sessionStorage.setItem(
            user.userimgURL,
            res.user.photoURL as string
          );
        }
        swal(msg.loginsuccess, msg.loginsuccessBody, 'success');
        dispatch(deactive());
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <ThemeProvider theme={loginBtntheme}>
        <Button
          variant="text"
          color="inherit"
          onClick={() => {
            handleLogin().then(() => router.push(router.asPath));
          }}
        ></Button>
      </ThemeProvider>
    </>
  );
};
