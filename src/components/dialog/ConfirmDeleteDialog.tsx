import React, { FC, Fragment } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';

export type DeleteConfirmDialogProps = {
  open: boolean;
  onClose?: () => void;
  onDelete?: () => void;
};

const DeleteConfirmDialog: FC<DeleteConfirmDialogProps> = ({ open, onClose, onDelete }) => {
  return (
    <Fragment>
      <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose} aria-describedby="alert-dialog-confirm">
        <DialogTitle id="alert-dialog-title" sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            Please confirm if you wish to
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            delete the post
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1" sx={{ textAlign: 'center', color: 'gray' }}>
            Are you sure you want to delete the post?
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2" sx={{ textAlign: 'center', color: 'gray' }}>
            Once deleted, it cannot be recovered.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', mb: 2, p: 3 }}>
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              color: '#5B5B5B',
              borderColor: 'gray',
              fontWeight: 'bold',
              width: '90%',
              maxWidth: '400px',
              '&:hover': {
                borderColor: 'darkgray',
                color: '#5B5B5B'
              }
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 'bold',
              width: '90%',
              maxWidth: '400px',
              '&:hover': {
                backgroundColor: 'darkred'
              }
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DeleteConfirmDialog;
