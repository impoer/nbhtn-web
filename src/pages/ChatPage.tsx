import React from 'react';
import Chat from "../components/Chat";
import { Box } from '@mui/material';

const ChatPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                borderRight: '1px solid #ccc',
                minHeight: '76vh', 
            }}
        >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ padding: 2, borderTop: '1px solid #ccc' }}>
                <Chat />
            </Box>
        </Box>
    );
};

export default ChatPage;
