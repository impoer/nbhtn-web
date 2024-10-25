import React, { useState, useCallback } from 'react';
import { Box, Button, Container, TextField, Typography, Grid, Divider, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from '../components/ErrorPopup';
import SuccessPopup from '../components/SuccessPopup';
import { useAppDispatch } from '../store/store';
import { setToken } from '../store/userSlice';
import { ULR } from '../utils';

const AuthPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCloseErrorPopup = () => {
        setError(null);
    };

    const handleSuccess = () => {
        setSuccessMessage('Operation completed successfully!');
    };

    const handleCloseSuccessPopup = () => {
        setSuccessMessage(null);
    };

    const handleEmailPasswordSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const url = isLogin ? `${ULR}/login` : `${ULR}/register`;
        const requestData = isLogin ? { email, password } : { name, email, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            
            if (response.ok) {
                const data = await response.json();
                if (isLogin) {
                    localStorage.setItem('token', data.access_token);
                    sessionStorage.setItem('refreshToken', data.refresh_token);
                    dispatch(setToken(data.access_token));
                    navigate('/');
                } else {
                    handleSuccess()
                    navigate('/login');
                    setIsLogin(true)
                }
            } else {
                const errorData = await response.json();
                console.error(errorData)
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError("We have no this user");
        }
    };

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center" marginTop={8}>
                <LockOutlinedIcon fontSize="large" color="primary" />
                <Typography component="h1" variant="h5">
                    {isLogin ? 'Sign In' : 'Register'}
                </Typography>
                <Box component="form" onSubmit={handleEmailPasswordSubmit} noValidate sx={{ mt: 1 }}>
                    {!isLogin && (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    )}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete={isLogin ? 'current-password' : 'new-password'}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </Button>

                    <Divider sx={{ mt: 3, mb: 2 }}>Or sign in with</Divider>

                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <GoogleLoginButton />
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <Grid item>
                            {isLogin ? (
                                <Typography>
                                    Don't have an account?{' '}
                                    <Link href="#" onClick={() => setIsLogin(false)}>
                                        Register
                                    </Link>
                                </Typography>
                            ) : (
                                <Typography>
                                    Already have an account?{' '}
                                    <Link href="#" onClick={() => setIsLogin(true)}>
                                        Sign In
                                    </Link>
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {error && <ErrorPopup errorMessage={error} onClose={handleCloseErrorPopup} />}

            <SuccessPopup
                successMessage={successMessage}
                duration={5000}
                onClose={handleCloseSuccessPopup}
            />

        </Container>
    );
};

export default AuthPage;
