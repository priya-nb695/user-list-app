import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  color: 'white',
  textAlign: 'center',
  borderRadius: '4px',
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  display: 'inline-block',
  paddingBottom: theme.spacing(1),
}));

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle variant="h3">{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
