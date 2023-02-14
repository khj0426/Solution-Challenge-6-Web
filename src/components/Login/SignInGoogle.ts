import { auth } from '../../api/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const SigninGoogle = () => {
  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider)
      .then((res) => {
        const provider = GoogleAuthProvider.credentialFromResult(res);
        if (provider?.accessToken) {
          localStorage.setItem('accessToken', provider?.accessToken);
        }
        localStorage.setItem('refreshToken', res.user.refreshToken);

        return res;
      })
      .catch((err) => {
        return err;
      });
    return data;
  };

  const Login = handleLogin();

  return Login;
};
