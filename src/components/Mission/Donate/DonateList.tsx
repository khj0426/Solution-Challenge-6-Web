import type { Props } from '../Mission';
import { Drawer } from '@mui/material';
const DonateList = ({ state, setState }: Props) => {
  return (
    <>
      <Drawer
        open={state}
        onClose={() => setState(!state)}
        sx={{
          width: '50vw',
        }}
        anchor="top"
      >
        <div>h1</div>
      </Drawer>
    </>
  );
};

export default DonateList;
