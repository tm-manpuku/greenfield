import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        light: '#FF8A65',
        main: '#FA6709',
        dark: '#DD2C00',
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