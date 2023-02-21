import { createTheme } from '@mui/material';

const DrawerButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiAvatar: {
      variants: [
        {
          props: {},
          style: {
            margin: 0,
            padding: 0,
            cursor: 'pointer',
          },
        },
      ],
    },
  },
});

export default DrawerButtonTheme;
