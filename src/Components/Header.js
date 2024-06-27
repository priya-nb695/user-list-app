import React from 'react';
import { Typography, Box, TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  
  textAlign: 'center',
  borderRadius: '4px',
  marginBottom: theme.spacing(3),
  marginTop:theme.spacing(3),
  boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor:'#eddcd9',
  color:'#de5499',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'inline-block',
  paddingBottom: theme.spacing(1),
}));

const Header = ({ title, searchQuery, setSearchQuery }) => {
  return (
    <HeaderContainer>
      <HeaderTitle variant="h3">{title}</HeaderTitle>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </HeaderContainer>
  );
};

export default Header;

