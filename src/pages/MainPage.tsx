import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Avatar, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import defaultUserImage from "../assets/default_user.png";
import GithubPage from './Github-page';
import { useTheme } from '@mui/material/styles';

const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleLogout = () => {
        navigate('/login');
        dispatch(setUser({ email: '', name: '', picture: '', token: '' }));
    };

    const handleClick = () => {
        navigate('/settings');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                            Welcome, {user.name || 'User'}!
                        </Typography>
                    </Box>
                    
                    {isMobile ? (
                        <IconButton color="inherit" onClick={handleClick}>
                            <Avatar src={user.picture || defaultUserImage} alt="User" />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '10px' }}>
                                <img
                                    src={user.picture || defaultUserImage}
                                    onClick={handleClick}
                                    alt="User"
                                    style={{ borderRadius: '50%', cursor: "pointer", width: "30px" }}
                                />
                            </Box>
                            <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: '10px', marginRight: "20px" }}>
                                Logout
                            </Button>
                        </Box>
                    )}
                    
                    {!isMobile && (
                        <Box sx={{
                            position: 'absolute',
                            top: 10,
                            right: 0,
                            zIndex: 2,
                            margin: 0,
                        }}>
                            <div className='github-doc'>
                                <GithubPage />
                            </div>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MainPage;
