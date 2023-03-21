import styled from 'styled-components';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { SigninGoogle } from '../Login/SignInGoogle';
const Login = () => {
  return (
    <>
      <ModalPosition>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid #aaaaaa',
            borderRadius: '20px',
            width: '350px',
            height: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            boxShadow: 'none',
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
      </ModalPosition>
    </>
  );
};

const ModalPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #fff;
  height: 100vh;
  opacity: 1;
`;

export default Login;
