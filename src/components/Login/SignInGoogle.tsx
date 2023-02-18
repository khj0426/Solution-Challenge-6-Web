import { auth } from '../../api/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as actions from '../Store/module/user';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import { msg, user } from '../../constants/mapConstants';
import { useRouter } from 'next/dist/client/router';
import getAccessToken from '../../api/getAccessToken';
import newStore from '../Store/module';

export const SigninGoogle = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  //로그인 시 dispatch,페이로드로 이메일 전달
  const login = (email: string) => dispatch(actions.LOGINCHECK(email));

  const handleLogin = async () => {
    if (newStore.getState().persist.user.email !== '') {
      const email = newStore.getState().persist.user.email;
      const password = 'google';
      getAccessToken({ username: '', email, password });
      login(email);
      console.log('로그인');
      return;
    }

    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        if (res.user.email && res.user.displayName) {
          login(res.user.email);
          const username = res.user.displayName;
          const email = res.user.email;
          const password = 'google';
          getAccessToken({ username, email, password });
          localStorage.setItem(user.userimgURL, res.user.photoURL as string);
        }

        swal(msg.loginsuccess, msg.loginsuccessBody, 'success');
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <Button
        color="inherit"
        style={{ fontWeight: '500', fontSize: '15px' }}
        onClick={() => {
          handleLogin();
          router.replace('/');
        }}
      >
        Login
      </Button>
    </>
  );
};
