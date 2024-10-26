import React, { useState, useCallback, useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../components/GoogleLoginButton';
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

    const handleCloseErrorModal = () => setError(null);
    const handleCloseSuccessModal = () => setSuccessMessage(null);

    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 8;

    const handleEmailPasswordSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!isEmailValid) {
            setError("Invalid email format. Please enter a valid email.");
            return;
        }
        if (!isPasswordValid) {
            setError("Password should be at least 8 characters long.");
            return;
        }

        const url = isLogin ? `${ULR}/login` : `${ULR}/register`;
        const requestData = isLogin ? { email, password } : { name, email, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const data = await response.json();
                if (isLogin) {
                    localStorage.setItem('token', data.access_token);
                    sessionStorage.setItem('refreshToken', data.refresh_token);
                    dispatch(setToken(data.access_token));
                    navigate('/dashboard');
                } else {
                    setSuccessMessage('Registration completed successfully!');
                    navigate('/login');
                    setIsLogin(true);
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError("User not found or server error occurred.");
        }
    };

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), []);
    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (error) {
            timer = setTimeout(handleCloseErrorModal, 3000);
        }
        return () => clearTimeout(timer);
    }, [error]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (successMessage) {
            timer = setTimeout(handleCloseSuccessModal, 3000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);

    return (
        <Container fluid="sm" className="d-flex align-items-center justify-content-center min-vh-100">
            <Card className="p-4 shadow-sm w-100" style={{ maxWidth: '400px', borderRadius: '10px' }}>
                <Card.Title className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#343a40' }}>
                    {isLogin ? 'Sign In' : 'Register'}
                </Card.Title>
                <Form onSubmit={handleEmailPasswordSubmit}>
                    {!isLogin && (
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={handleNameChange}
                                required
                                className="py-2"
                                style={{ borderRadius: '5px' }}
                            />
                        </Form.Group>
                    )}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            isInvalid={!isEmailValid && email.length > 0}
                            required
                            className="py-2"
                            style={{ borderRadius: '5px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            isInvalid={!isPasswordValid && password.length > 0}
                            required
                            className="py-2"
                            style={{ borderRadius: '5px' }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Password should be at least 8 characters long.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-3" style={{ borderRadius: '5px', padding: '10px', fontSize: '1rem' }}>
                        {isLogin ? 'Sign In' : 'Register'}
                    </Button>
                </Form>
                
                <div className="text-center my-3 text-muted">Or sign in with</div>
                
                <Row className="justify-content-center my-2">
                    <Col xs="auto">
                        <GoogleLoginButton />
                    </Col>
                </Row>
                
                <div className="text-center mt-4">
                    {isLogin ? (
                        <div>
                            Don't have an account?{' '}
                            <Button variant="link" onClick={() => setIsLogin(false)} className="p-0" style={{ fontSize: '1rem' }}>
                                Register
                            </Button>
                        </div>
                    ) : (
                        <div>
                            Already have an account?{' '}
                            <Button variant="link" onClick={() => setIsLogin(true)} className="p-0" style={{ fontSize: '1rem' }}>
                                Sign In
                            </Button>
                        </div>
                    )}
                </div>
            </Card>

            <Modal show={!!error} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={!!successMessage} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>{successMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseSuccessModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AuthPage;
