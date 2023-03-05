import { Drawer } from '@mui/material';
import { SetStateAction, Dispatch } from 'react';
import MissonDetail from './MissonDetail';
import { useState } from 'react';
const Mission = ({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  const [misson, setMisson] = useState<number>(1);
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
        <MissonDetail misson={1} setAction={setMisson} target={misson === 1} />
        <MissonDetail misson={2} setAction={setMisson} target={misson === 2} />
        <MissonDetail misson={3} setAction={setMisson} target={misson === 3} />
      </Drawer>
    </>
  );
};

export default Mission;
