import { CardContent, CardMedia, Typography, Button } from '@mui/material';
import { SigninGoogle } from '../Login/SignInGoogle';
import Link from 'next/link';
const Login = () => {
  return (
    <>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          border: '0.7px solid #aaaaaa',
          borderRadius: '20px',
          width: '350px',
          height: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
          margin: '100px auto',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          style={{
            fontWeight: '700',
          }}
        >
          BeP
        </Typography>
        <CardMedia
          sx={{ height: 200, width: 200 }}
          image="/img/Earth.gif"
          title="EarthImg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lets make a better planet together
          </Typography>
        </CardContent>
        <SigninGoogle />
        <Button
          size="small"
          style={{
            fontSize: '12px',
            color: 'rgba(0,0,0,0.6)',
          }}
        >
          <Link
            href="https://www.youtube.com/watch?t=0s&v=eIh8eERBSR4&feature=youtu.be"
            target="_blank"
          >
            How to use BeP?
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
