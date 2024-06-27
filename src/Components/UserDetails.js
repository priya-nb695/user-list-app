import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

const defaultAvatar = 'https://via.placeholder.com/150';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#c8d8e4',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  border: '1px solid #ddd',
}));

const StyledAvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  background: 'linear-gradient(135deg, #FFEB3B 30%, #000000 70%)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '150px',
  height: '150px',
  borderRadius: '10px 0 0 10px',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const UserDetails = ({ user }) => {
  return (
    <StyledCard>
      <StyledAvatarContainer>
        <StyledAvatar src={user.avatar } />
      </StyledAvatarContainer>
      <StyledCardContent>
        <StyledTypography variant="h4">
          {`${user.profile.username}`}
        </StyledTypography>
        <StyledTypography variant="body1">
          <strong>First Name:</strong> {user.profile.firstName}
        </StyledTypography>
        <StyledTypography variant="body1">
          <strong>Last Name:</strong> {user.profile.lastName}
        </StyledTypography>
        <StyledTypography variant="body1">
          <strong>Email:</strong> {user.profile.email}
        </StyledTypography>
    
        <StyledTypography variant="body1">
          <strong>Occupation:</strong> {user.jobTitle}
        </StyledTypography>
        <Typography variant="body1">
          <strong>About me:</strong> {user.Bio}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default UserDetails;

