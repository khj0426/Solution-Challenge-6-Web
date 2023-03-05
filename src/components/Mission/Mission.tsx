import { Drawer } from '@mui/material';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import MissionDetail from './MissonDetail';
import { setAnswer } from '../Store/module/misson/answer';
import { useDispatch } from 'react-redux';

export type TypeMission = {
  id: number;
  question: string;
  latitude: string;
  longitude: string;
  mpoint: number;
};

type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const Mission = ({ state, setState }: Props) => {
  const dispatch = useDispatch();

  const [missions, setMissions] = useState<TypeMission[]>([]);
  const [activemisson, setActivemisson] = useState<number>(0);

  useEffect(() => {
    const fetchMissions = async () => {
      const { data } = await axios.get('/api/main', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      setMissions(data);
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
      {missions.map((mission, index) => (
        <MissionDetail
          key={mission.id}
          misson={index}
          setAction={setActivemisson}
          target={activemisson === index}
          question={mission.question}
        />
      ))}
    </Drawer>
  );
};

export default Mission;
