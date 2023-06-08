import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      },
      success: {
        main: '#4caf50'
      }
    },
    typography: {
        fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
      fontSize: 16,
      h1: {
        fontWeight: 500,
        fontSize: '2.2rem'
      },
      h3: {
        fontWeight: 700,
        fontSize: '2.2rem'
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.75rem'
      },
      h5: {
        fontWeight: 500
      },
      h6: {
        fontWeight: 500
      }
    }
  })

  export default theme;