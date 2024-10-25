import React from 'react';
import { Box } from '@mui/material';
import GitHubCorner from 'react-github-corner';

const GithubPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #ccc',
                height: 0,
            }}
        >
            <div>
                <GitHubCorner href="https://github.com/NabuhotniiRoman" />
            </div>
        </Box>
    );
};

export default GithubPage;
