import { Card, CardContent, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';
export const MissionDetail = () => {
  return (
    <>
      <Card
        style={{
          background: '#ffffff',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          <StyledButTextArea>
            <Avatar alt="missonimg" src="/img/missonBtn.jpg" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                component="div"
                sx={{
                  mb: 1.5,
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0,
                  fontSize: '10px',
                  color: '#333333',
                }}
              >
                LIFE BELOW WATER
              </Typography>
              <Typography
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  fontSize: '15px',
                  fontWeight: '550',
                  color: '#121212',
                }}
              >
                If you want to solve other problem, Buy it 20$
              </Typography>
            </div>
          </StyledButTextArea>
        </CardContent>
      </Card>
    </>
  );
};

const StyledButTextArea = styled.div`
  display: flex;
  align-items: center;
  height: auto;
`;
