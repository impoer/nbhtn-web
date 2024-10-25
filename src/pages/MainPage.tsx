
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import defaultUserImage from "../assets/default_user.png";
import GithubPage from './Github-page';

const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

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
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                            Welcome, {user.name || 'User'}!
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100px', borderRight: '1px solid #ccc', marginRight: "30px" }}>
                        <img src={defaultUserImage || user.picture} onClick={handleClick} alt="User" style={{ borderRadius: '50%', cursor: "pointer", width: "30px", margin: "0", padding: "0" }} />
                    </Box>
                    <Button sx={{ marginRight: "40px" }} color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default MainPage;
