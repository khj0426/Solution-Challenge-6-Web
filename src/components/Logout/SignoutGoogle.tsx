import { auth } from '../../api/firebase';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import * as actions from '../Store/module/user';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const SignOutGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSingout = async () => {
    await signOut(auth).then(() => {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('persist:root');
      sessionStorage.removeItem('imgURL');
      dispatch(actions.LOGOUTCHECK());
    });
  };
  return (
    <Button
      color="inherit"
      style={{ fontWeight: '500', fontSize: '15px' }}
      onClick={() => {
        handleSingout();
        router.replace('/');
      }}
    >
      logOut
    </Button>
  );
};

export default SignOutGoogle;
