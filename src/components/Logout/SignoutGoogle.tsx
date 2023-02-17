import { auth } from '../../api/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as actions from '../Store/module/user';

const SignOutGoogle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSingout = async () => {
    await signOut(auth).then(() => {
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
