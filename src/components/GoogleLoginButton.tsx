import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAppDispatch } from '../store/store';
import { setUser, UserState } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const GoogleLoginButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSuccess = (credentialResponse: any) => {
        if (!credentialResponse || !credentialResponse.credential) {
            console.error('No credentials found');
            return;
        }

        const token = credentialResponse.credential;

        try {
            const userInfo: UserState = jwtDecode(token);
            console.log('User Info:', userInfo);

            const { email, name, picture = "" } = userInfo;
            dispatch(setUser({ email, name, picture, token }));
            navigate('/');
        } catch (error) {
            console.error('Error decoding token:', error);
            setErrorMessage('Error to get token, please try again');
            setOpen(true);
        }
    };

    const handleError = () => {
        console.error('Google Login Error: An error occurred during the Google login process.');
        setErrorMessage('Google Login Error: An error occurred during the Google login process.');
        setOpen(true);
    };

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                useOneTap
            />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default GoogleLoginButton;
