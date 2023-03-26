import { CardContent, CardMedia, Typography } from '@mui/material';
import { SigninGoogle } from '../Login/SignInGoogle';
const Login = () => {
  return (
    <>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          border: '1px solid #aaaaaa',
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
      </div>
    </>
  );
};

export default Login;
