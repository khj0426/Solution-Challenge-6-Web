import { auth } from '../../api/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { LOGINCHECK } from '../Store/module/user';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { msg, user } from '../../constants/mapConstants';
import { getAccessToken } from '../../api/main';
import loginBtntheme from '../../styles/LoginButton';
import { ThemeProvider, Button } from '@mui/material';
import { deactive } from '../Store/module/globalmodal';
import { RootState } from '../Store/module';
import { useRouter } from 'next/router';

export const SigninGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: RootState) => state.user && state.user.email
  );

  //로그인 시 dispatch,페이로드로 이메일 전달
  const login = (email: string) => dispatch(LOGINCHECK(email));

  const handleLogin = async () => {
    if (userEmail !== '' && userEmail) {
      const email = userEmail;
      const password = 'google';
      getAccessToken({ username: '', email, password });
      login(email);
      return;
    }

    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user.getIdToken());
        if (res.user.email && res.user.displayName) {
          login(res.user.email);
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
