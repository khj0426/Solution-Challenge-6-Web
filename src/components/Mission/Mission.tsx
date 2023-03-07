import { Drawer } from '@mui/material';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import MissionDetail from './MissonDetail';
import { setAnswer } from '../Store/module/misson/answer';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export type TypeMission = {
  id: number;
  question: string;
  latitude: string;
  longitude: string;
  mpoint: number;
};

export type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const Mission = ({ state, setState }: Props) => {
  const dispatch = useDispatch();

  const [missions, setMissions] = useState<TypeMission[]>([]);
  const [activemisson, setActivemisson] = useState<number>(0);
  const [authorize, hasAuthorize] = useState<boolean>(true);

  useEffect(() => {
    if (sessionStorage.getItem('accessToken') === null) {
      hasAuthorize(false);
      return;
    }

    const fetchMissions = async () => {
      const { data, status } = await axios.get('/api/main', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      if (status === 200) {
        setMissions(data);
        hasAuthorize(true);
      }
    };

    fetchMissions();
  }, [sessionStorage.getItem('accessToken')]);

  useEffect(() => {
    if (missions.length > 0) {
      dispatch(setAnswer(missions));
    }
  }, [missions]);

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: 340,
          height: 'auto',
          background: '#FFFFFF',
          borderRadius: '10px',
        },
        style: {
          display: 'flex',
          marginLeft: 'auto',
          fontSize: '15px',
        },
      }}
      anchor="bottom"
      open={state}
      onClose={() => setState(false)}
    >
      {authorize === false ? (
        <StyledNotLogin>로그인이 필요합니다</StyledNotLogin>
      ) : null}

      {missions.map((mission, index) => (
        <MissionDetail
          key={mission.id}
          setAction={setActivemisson}
          target={activemisson === index}
          mission={mission}
          index={index}
        />
      ))}
    </Drawer>
  );
};

const StyledNotLogin = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Mission;
