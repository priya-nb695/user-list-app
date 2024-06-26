import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';
import Header from './Components/Header';
import Loader from './Components/Loader';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [loadingUserDetails, setLoadingUserDetails] = useState(false);
  const userDetailsRef = useRef(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        const validUsers = response.data.map(user => ({
          ...user,
          avatar: user.avatar.includes('avatars') ? '' : user.avatar
        }));
        const shuffledUsers = shuffleUsers(validUsers);
        setUsers(shuffledUsers);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleUserSelect = (user) => {
    setLoadingUserDetails(true);
    setSelectedUser(null);
    setTimeout(() => {
      setSelectedUser(user);
      setLoadingUserDetails(false);
      userDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Simulate loading delay
  };

  const shuffleUsers = (users) => {
    const usersWithAvatars = users.filter(user => user.avatar);
    const usersWithoutAvatars = users.filter(user => !user.avatar);

    const shuffledUsers = [];
    const maxLength = Math.max(usersWithAvatars.length, usersWithoutAvatars.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < usersWithAvatars.length) {
        shuffledUsers.push(usersWithAvatars[i]);
      }
      if (i < usersWithoutAvatars.length) {
        shuffledUsers.push(usersWithoutAvatars[i]);
      }
    }

    return shuffledUsers;
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  if (users.length === 0) {
    return <Typography variant="h6">No data to show</Typography>;
  }

  return (
    <Container>
      <Header title="Users List" />
      <Box display="flex">
        <Box flex={1}>
          <UserList users={users} onUserSelect={handleUserSelect} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box flex={2} ref={userDetailsRef}>
          {loadingUserDetails ? (
            <Loader />
          ) : selectedUser ? (
            <UserDetails user={selectedUser} />
          ) : (
            <Typography variant="h6">Select a user to see details</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
