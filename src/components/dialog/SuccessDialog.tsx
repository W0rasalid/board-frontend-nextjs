import React, { FC, Fragment } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MuiButton from 'components/button/MuiButton';

export type SuccessDialogProps = {
  open: boolean;
  onClose?: () => void;
  message?: string;
};

const SuccessDialog: FC<SuccessDialogProps> = ({ open, onClose, message }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Fragment>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle id="success-dialog-title" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <CheckCircleIcon sx={{ color: 'green', fontSize: 68 }} />
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton label="Close" onClick={handleClose} variant="contained" />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default SuccessDialog;
