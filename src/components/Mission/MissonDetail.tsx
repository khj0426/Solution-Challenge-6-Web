import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { requestInstance } from '../../api/core';
import { useEffect, useState } from 'react';
const MissionDetail = ({
  misson,
  setAction,
  target,
}: {
  misson: number;
  setAction: Dispatch<SetStateAction<number>>;
  target: boolean;
}) => {
  type mainResponse = {
    id: number;
    question: string;
    latitude: string;
    longitude: string;
    mpoint: number;
  };

  const [res, setRes] = useState<mainResponse>({
    id: 0,
    question: '',
    latitude: '',
    longitude: '',
    mpoint: 0,
  });

  useEffect(() => {
    const getMisson = async () => {
      const data = await requestInstance.get('/main');
      console.log(data);
    };

    getMisson();
  }, []);

  return (
    <>
      <Card
        style={{
          borderBottom: '3px solid #CCCCCC',
        }}
      >
        <CardContent>
          <StyledButTextArea
            state={target}
            onClick={() => {
              setAction(misson);
            }}
          >
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
                {res.question}
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
                {res.latitude}
              </Typography>
            </div>
          </StyledButTextArea>
        </CardContent>
      </Card>
    </>
  );
};

const StyledSelected = css`
  background-color: #ade7f7;
  color: #000;
  cursor: pointer;
`;

const StyledNotSelected = css`
  background-color: #ffffff;
  color: #000;
  cursor: pointer;
`;

const StyledButTextArea = styled.div<{ state: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;

  ${({ state }) => state === true && StyledSelected}
  ${({ state }) => state === false && StyledNotSelected}
`;

export default MissionDetail;
