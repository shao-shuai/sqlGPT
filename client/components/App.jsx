import React from 'react';
import Datatest from './Datatest';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>SQL-GPT</h1>
        <Datatest />
      </Box>
    </ThemeProvider>
  );
};

export default App;
