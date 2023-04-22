import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        light: '#ffcd38',
        main: '#ffc107',
        dark: '#b28704',
        contrastText: '#fff',
      },
      secondary: {
        light: '#33eb91',
        main: '#00e676',
        dark: '#00a152',
        contrastText: '#000',
      },
    },
  });

  export default theme;