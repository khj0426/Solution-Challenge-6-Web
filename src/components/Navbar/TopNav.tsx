import { AppBar } from '@mui/material';
import { Drawer, MenuList } from '@mui/material';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ListItemText, ListItemIcon } from '@mui/material';

import newStore from '../Store/module';
import SignOutGoogle from '../Logout/SignoutGoogle';
import { SigninGoogle } from '../Login/SignInGoogle';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loginmodal, setloginModal] = useState<boolean>(false);
  return (
    <AppBar position="static">
      <IconButton onClick={() => setOpen(!open)}></IconButton>

      <Drawer open={open}>
        <MenuList
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            justifyContent: 'center',
          }}
        >
          <MenuItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setloginModal(!loginmodal);
            }}
          >
            <SigninGoogle />
          </MenuItem>
          <MenuItem>
            <ListItemIcon></ListItemIcon>
            <SignOutGoogle />
          </MenuItem>
        </MenuList>
        <MenuList>
          <ListItemIcon>
            <ListItemText>
              {newStore.getState().persist.user.email}
            </ListItemText>
          </ListItemIcon>
        </MenuList>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
