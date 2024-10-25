import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import MainPage from './MainPage';

const Layout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                height: "100vh"
            }}
        >
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: "100vh"
                }}
            >
                <MainPage />
                <Box sx={{ padding: 0, overflow: "hidden" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
