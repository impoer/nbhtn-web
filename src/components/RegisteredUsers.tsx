import React from 'react';
import { Box, Typography, Divider, Grid, Avatar } from '@mui/material';
import { ListItem } from '@mui/material';
import { UserInfo } from '../store/userSlice';
import userAvatar from "../assets/default_user.png"

interface RegisteredUsersProps {
    users: UserInfo[];
}

const RegisteredUsers: React.FC<RegisteredUsersProps> = ({ users }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 1 }}>
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>Registered Users</Typography>
            <Divider />
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
                {users.map(user => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <ListItem sx={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
                            <Avatar src={userAvatar} alt={user.name} sx={{ width: 30, height: 30, marginRight: 1 }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>{user.name}</Typography>
                                {/* {user.online ? (
                                    <Typography variant="caption" color="green" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <OnlineIcon fontSize="small" sx={{ marginRight: 0.5 }} /> Online
                                    </Typography>
                                ) : (
                                    <Typography variant="caption" color="red" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <OfflineIcon fontSize="small" sx={{ marginRight: 0.5 }} /> Offline
                                    </Typography>
                                )} */}
                            </Box>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RegisteredUsers;
