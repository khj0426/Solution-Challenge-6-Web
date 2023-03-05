import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
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
                })
              );
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
                {mission.question}
              </Typography>
              <Typography
                component="p"
                style={{
                  marginRight: 'auto',
                  display: 'flex',
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              ></Typography>
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
