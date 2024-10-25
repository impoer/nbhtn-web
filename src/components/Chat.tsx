import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

interface Message {
    id: number;
    text: string;
    sender: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: input,
            sender: 'User',
        };

        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Chat</Typography>
            <Box sx={{ flexGrow: 1, border: '1px solid #ccc', padding: 1, overflowY: 'auto' }}>
                <List>
                    {messages.map((msg) => (
                        <ListItem key={msg.id}>
                            <ListItemText primary={msg.text} secondary={msg.sender} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ display: 'flex', marginTop: 2 }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <Button variant="contained" onClick={handleSendMessage} sx={{ marginLeft: 1 }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
