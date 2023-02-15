import { Button } from '@mui/material';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { SigninGoogle } from '../Login/SignInGoogle';
export default function LoginModal() {
  return (
    <>
      <StyledLogin>
        <StyledHeader>Login</StyledHeader>
        <StyledBody>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
          >
            Email
          </TextField>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
          >
            Password
          </TextField>
        </StyledBody>
        <ButtonAreas>
          <Button variant="contained" style={{ width: '200px' }}>
            Login
          </Button>

          <SigninGoogle />
        </ButtonAreas>
      </StyledLogin>
    </>
  );
}

const StyledLogin = styled.form`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  width: 38%;
  gap: 45px;
  border-bottom: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  box-shadow: 0px 0.75px 0.75px 1.5px rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 1%;
  background-color: #fff;
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: black;
  font-weight: 600;
  color: #fff;
  font-size: 20px;
  height: 50px;
`;

const StyledBody = styled.article`
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const ButtonAreas = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
