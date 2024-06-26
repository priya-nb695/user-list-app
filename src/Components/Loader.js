import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress color="secondary" />
      <br />
      <h1>Data is Loading....</h1>
    </Box>
  );
};

export default Loader;
