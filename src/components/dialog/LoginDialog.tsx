import { Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { FC } from 'react';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

export type LoginDialogProps = {
  open: boolean;
  handleClose?: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginDialog: FC<LoginDialogProps> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        if (handleClose) {
          handleClose();
        }
      }}
    >
      <DialogTitle>
        {
          <Stack
            flexDirection="row"
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h4">กรุณา Login เข้าสู่ระบบ</Typography>
          </Stack>
        }
      </DialogTitle>
      <DialogContent>
        <AuthLogin />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
