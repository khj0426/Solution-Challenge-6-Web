import { auth } from '../../api/instance/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { user } from '../../constants/mapConstants';
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
    googleProvider.setCustomParameters({
      prompt: 'select_account',
    });
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (res.user.email && res.user.displayName) {
          const username = res.user.displayName;
          const email = res.user.email;
          const password = res.user.uid;
          getAccessToken({ username, email, password });
          window.sessionStorage.setItem(
            user.userimgURL,
            res.user.photoURL as string
          );
        }

        dispatch(deactive());
        router.push(router.asPath);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <ThemeProvider theme={loginBtntheme}>
        <Button
          name="google login button"
          variant="text"
          color="inherit"
          onClick={() => {
            handleLogin();
          }}
        ></Button>
      </ThemeProvider>
    </>
  );
};
