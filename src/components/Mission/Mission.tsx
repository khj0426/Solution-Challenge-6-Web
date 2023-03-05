import { Drawer } from '@mui/material';
import { SetStateAction, Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import MissionDetail from './MissonDetail';

type Mission = {
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
  const [missions, setMissions] = useState<Mission[]>([]);
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
  }, []);

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
