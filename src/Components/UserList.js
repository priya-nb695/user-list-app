
import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Divider } from '@mui/material';
import { Typography } from '@mui/material';

const UserList = ({ users, onUserSelect }) => {
  return (
    <List>
      {users.map((user, index) => (
        <React.Fragment key={user.id}>
          <ListItem button onClick={() => onUserSelect(user)}>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText 
              primary={`${user.profile.username}`} 
              secondary={
                <>
                  <br />
                  <Typography component="span" variant="body2" color="textSecondary">
                    View Details
                  </Typography>
                </>
              } 
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => onUserSelect(user)}>
                {/* Optional: Add an icon here */}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {index < users.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default UserList;


