// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaWallet, FaHistory, FaUserCircle, FaSignOutAlt  } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { clearToken } from '../store/userSlice';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar
      style={{ background: 'linear-gradient(to right, #0062cc, #004085)', color: 'white' }}
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand as={Link} to="/" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/" active={location.pathname === '/'} style={{ color: 'white' }}>
            <FaHome style={{ margin: '5px' }} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" active={location.pathname === '/dashboard'} style={{ color: 'white' }}>
            <FaUser style={{ margin: '5px' }} /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/accounts" active={location.pathname === '/accounts'} style={{ color: 'white' }}>
            <FaWallet style={{ margin: '5px' }} /> Accounts
          </Nav.Link>
          <Nav.Link as={Link} to="/transactions" active={location.pathname === '/transactions'} style={{ color: 'white' }}>
            <FaHistory style={{ margin: '5px' }} /> Transactions
          </Nav.Link>
        </Nav>

        {isMobileOrTablet ? (
          // Show Logout link on mobile and tablet
          <Nav.Link onClick={handleLogout} style={{ color: 'white', marginRight: '20px' }}>
            <FaSignOutAlt style={{ margin: '5px' }} /> Logout
          </Nav.Link>
        ) : (
          // Show user icon with dropdown on desktop
          <div style={{ marginRight: '20px' }}>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                <FaUserCircle size={32} style={{ color: 'white' }} />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
