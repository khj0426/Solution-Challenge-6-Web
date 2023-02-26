import { Drawer } from '@mui/material';
import { SetStateAction, Dispatch } from 'react';
import { MissionDetail } from './MissonDetail';
const Mission = ({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
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
        <MissionDetail />
        <MissionDetail />
        <MissionDetail />
      </Drawer>
    </>
  );
};

export default Mission;
