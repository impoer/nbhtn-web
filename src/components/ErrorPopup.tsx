import React, { useEffect, useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ErrorPopupProps {
  errorMessage: string | null;  
  duration?: number;           
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ errorMessage, duration = 5000, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setOpen(true);
    }
  }, [errorMessage]);

  const handleClose = useCallback(() => {
    setOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [open, duration, handleClose]);

  return (
    <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
