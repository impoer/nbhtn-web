import React, { useEffect, useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SuccessPopupProps {
  successMessage: string | null;
  duration?: number;
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ successMessage, duration = 5000, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (successMessage) {
      setOpen(true);
    }
  }, [successMessage]);

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
      <Alert onClose={handleClose} severity="success" variant="filled">
        {successMessage}
      </Alert>
    </Snackbar>
  );
};

export default SuccessPopup;
