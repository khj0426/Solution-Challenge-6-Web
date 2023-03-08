import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';
import { TypeMission } from './Mission';
import { setLatLng } from '../Store/module/latandlng';
import { useDispatch } from 'react-redux';
const MissionDetail = ({
  setAction,
  target,
  mission,
  index,
}: {
  setAction: Dispatch<SetStateAction<number>>;
  target: boolean;
  mission: TypeMission;
  index: number;
}) => {
  const dispatch = useDispatch();

  const [score, showScore] = useState<boolean>(false);
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
              setAction(index);
              dispatch(
                setLatLng({
                  lat: parseFloat(mission.latitude),
                  lng: parseFloat(mission.longitude),
                  id: mission.id,
                })
              );
              showScore(!score);
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
              {score === false ? (
                <Typography
                  style={{
                    marginRight: 'auto',
                    display: 'flex',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  {mission.question}
                </Typography>
              ) : (
                <StyledScoreActiveDiv>
                  <div style={{ fontSize: '13px', fontWeight: '600' }}>
                    {mission.miPoint}Point
                  </div>
                </StyledScoreActiveDiv>
              )}

              <Typography
                component="p"
                style={{
                  marginRight: 'auto',
                  display: 'flex',
                  fontWeight: '600',
                  fontSize: '13px',
                }}
              ></Typography>
            </div>
          </StyledButTextArea>
        </CardContent>
      </Card>
    </>
  );
};

const StyledScoreActiveDiv = styled.div`
  display: flex;
`;

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
  border-radius: 5px;
  align-items: center;
  width: 100%;
  gap: 5px;

  ${({ state }) => state === true && StyledSelected}
  ${({ state }) => state === false && StyledNotSelected}
`;

export default MissionDetail;
