import { auth } from '../../api/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as actions from '../Store/module/user';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import { msg, user } from '../../constants/mapConstants';
import { useRouter } from 'next/dist/client/router';

export const SigninGoogle = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  //로그인 시 dispatch,페이로드로 이메일 전달
  const login = (email: string) => dispatch(actions.LOGINCHECK(email));

  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        const provider = GoogleAuthProvider.credentialFromResult(res);
        const idToken = provider?.idToken;

        /*토큰 로컬 스토리지에 저장 */
        if (typeof idToken !== 'undefined') {
          sessionStorage.setItem('accessToken', idToken);
          sessionStorage.setItem(user.userimgURL, res.user.photoURL as string);
        }
        sessionStorage.setItem('refreshToken', res.user.refreshToken);
        if (res.user.email) {
          login(res.user.email);
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
