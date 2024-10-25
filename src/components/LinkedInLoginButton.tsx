// src/components/LinkedInLoginButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface LinkedInLoginButtonProps {
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
}

const LinkedInLoginButton: React.FC<LinkedInLoginButtonProps> = ({ onSuccess, onError }) => {
    const handleLinkedInLogin = () => {
        const redirectUri = "http://localhost:3000";
        const clientId = "{YOUR_LINKEDIN_CLIENT_ID}";

        const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=r_liteprofile%20r_emailaddress`;

        window.location.href = authUrl;
    };

    return (
        <Button variant="contained" color="primary" onClick={handleLinkedInLogin}>
            Sign In with LinkedIn
        </Button>
    );
};

export default LinkedInLoginButton;
