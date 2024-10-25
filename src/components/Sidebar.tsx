import React, { useState } from 'react';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import { Home, Chat, People, Settings, ChevronRight, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<string>('Home');

  const handleMenuItemClick = (label: string, path: string) => {
    setSelectedItem(label);
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: open ? 150 : 60,
        transition: 'width 0.3s',
        backgroundColor: '#f0f0f0',
        borderRight: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100vh',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
        <HeaderText open={open}>{open ? 'Nabuhotnii' : 'NBH'}</HeaderText>
        <IconButton onClick={toggleSidebar}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <Divider sx={{ width: '100%', marginY: 1 }} />
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <MenuItem
          icon={<Home />}
          label="Home"
          open={open}
          selected={selectedItem === 'Home'}
          onClick={() => handleMenuItemClick('Home', '/')}
        />
        <MenuItem
          icon={<Chat />}
          label="Chat"
          open={open}
          selected={selectedItem === 'Chat'}
          onClick={() => handleMenuItemClick('Chat', '/chat')}
        />
        <MenuItem
          icon={<People />}
          label="Users"
          open={open}
          selected={selectedItem === 'Users'}
          onClick={() => handleMenuItemClick('Users', '/users')}
        />
        <MenuItem
          icon={<Settings />}
          label="Settings"
          open={open}
          selected={selectedItem === 'Settings'}
          onClick={() => handleMenuItemClick('Settings', '/settings')}
        />
      </Box>
    </Box>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  selected: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, open, selected, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 1,
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        backgroundColor: selected ? '#d0d0d0' : 'transparent',
        '&:hover': {
          backgroundColor: selected ? '#d0d0d0' : '#e0e0e0',
        },
      }}
      onClick={onClick}
    >
      <IconButton>{icon}</IconButton>
      {open && (
        <Typography variant="body1" sx={{ marginLeft: 1 }}>
          {label}
        </Typography>
      )}
    </Box>
  );
};

const HeaderText = styled(Typography)(({ open }: { open: boolean }) => ({
  fontFamily: 'Monospace, sans-serif',
  fontWeight: 'bold',
  fontSize: open ? '1.2rem' : '1rem',
  transition: 'font-size 0.3s',
  color: '#333',
}));

export default Sidebar;
