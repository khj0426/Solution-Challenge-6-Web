import { createTheme } from '@mui/material';

const loginBtntheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'text',
          },

          style: {
            border: '1px solid #fff',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            backgroundImage: 'url("/img/googleLogin.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '200px',
            height: '41px',
            objectFit: 'cover',
          },
        },
      ],
    },
  },
});

export default loginBtntheme;
