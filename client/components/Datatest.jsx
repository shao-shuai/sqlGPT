import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import BasicTable from './BasicTable';

const Datatest = () => {
  const [data, setData] = useState('');
  const [inputValue, setInputValue] = useState('');

  const testString = 'hello this is a test string';

  const fetchData = async () => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputValue }),
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      
        
        
        <Box
          sx={{
            width: 700,
            height: 350,
            // backgroundColor: 'primary.dark',
            
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Adjust the justifyContent property
            alignItems: 'center',
          }}
        >
          <TextField
            sx={{
              width: { sm: 200, md: 500 },
              '& .MuiInputBase-root': {
                height: 300,
              },
            }}
            id="outlined-basic"
            label="Search database with natural language"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          
          <Button variant="contained" onClick={fetchData}>
            Submit
          </Button>
        
        </Box>
        <Box
        sx={{
            margin: "20px"
        }}>
          <BasicTable data={data}></BasicTable>
        </Box>
      
    </>
  );
};

export default Datatest;
