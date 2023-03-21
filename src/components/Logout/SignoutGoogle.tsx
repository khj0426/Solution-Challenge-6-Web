import { auth } from '../../api/instance/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const SignOutGoogle = () => {
  const router = useRouter();
  const handleSingout = async () => {
    await signOut(auth).then(async () => {
      sessionStorage.removeItem('imgURL');
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('userPoint');
    });

    router.push('/');
  };
  return (
    <Button
      color="inherit"
      style={{ fontWeight: '500', fontSize: '15px' }}
      onClick={() => {
        handleSingout();
      }}
    >
      logOut
    </Button>
  );
};

export default SignOutGoogle;
