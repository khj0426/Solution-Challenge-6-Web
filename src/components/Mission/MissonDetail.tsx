import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { Dispatch, SetStateAction, useState, useEffect, memo } from 'react';
import styled, { css } from 'styled-components';
import { TypeMission } from './Mission';
import { setLatLng } from '../Store/module/misson/latandlng';
import { useDispatch } from 'react-redux';
import { categoryMapping } from '../../constants/missonConstants';

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
  useEffect(() => {
    if (target === false) {
      showScore(false);
    }
  }, [target]);

  return (
    <>
      <Card
        sx={{
          borderBottom: '3px solid #CCCCCC',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          borderRadius: '10px',
          border: score ? '4px solid #367BB7' : 'none',
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
            {score === false ? (
              <Avatar
                alt="missonimg"
                src={`${categoryMapping.get(mission.category)}`}
              />
            ) : null}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {score === false && (
                <Typography
                  style={{
                    marginRight: 'auto',
                    fontSize: '13px',
                    fontWeight: '600',
                    alignItems: 'center',
                  }}
                >
                  {mission.question}
                </Typography>
              )}

              {score === true && (
                <StyledScoreActiveDiv>
                  <Avatar
                    style={{
                      fontSize: '13px',
                      color: '#367BB7',
                      background: '#fff',
                      fontWeight: '500',
                      boxShadow: '0px 0px 5px #367BB7',
                    }}
                  >
                    {mission.miPoint}
                  </Avatar>
                  <Typography
                    style={{
                      marginRight: 'auto',
                      fontSize: '13px',
                      fontWeight: '600',
                      alignItems: 'center',
                      marginLeft: '5px',
                    }}
                  >
                    {mission.question}
                  </Typography>
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
  justify-content: center;
  align-items: center;
`;

const StyledSelected = css`
  color: #000;
  cursor: pointer;
`;

const StyledFilpPoint = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #ade7f7;
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
  height: auto;
  width: 100%;
  gap: 5px;

  ${({ state }) => state === true && StyledSelected}
  ${({ state }) => state === false && StyledNotSelected}
`;

export default memo(MissionDetail);
