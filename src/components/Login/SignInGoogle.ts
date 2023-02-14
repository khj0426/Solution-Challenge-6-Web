import { auth } from '@/src/api/firebase';
import 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const SigninGoogle = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  return handleLogin();
};
