import { Card, CardContent, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';
export const MissionDetail = () => {
  return (
    <>
      <Card
        style={{
          borderBottom: '3px solid #CCCCCC',
        }}
      >
        <CardContent>
          <StyledButTextArea>
            <Avatar alt="missonimg" src="/img/missonBtn.jpg" />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <Typography
                style={{
                  marginRight: 'auto',
                  display: 'flex',
                  fontSize: '13px',
                }}
              >
                LIFE BELOW WATER
              </Typography>
              <Typography
                component="p"
                style={{
                  marginRight: 'auto',
                  display: 'flex',
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              >
                If you want to solve other problem, Buy it
                20asdasdsasdasdasdasdasadsadasd If you want to solve other
                problem, Buy it 20asdasdsasdasdasdasdasadsadasd
                Iasdsasdasdasdasdasadsadasd
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
  justify-content: center;
  width: 100%;
  gap: 5px;
`;
