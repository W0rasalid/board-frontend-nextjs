import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
// import { expect, within } from '@storybook/test';
import SuccessDialog, { SuccessDialogProps } from 'components/dialog/SuccessDialog';
import { Fragment, useState } from 'react';

const meta = {
  title: 'Components/Dialog/SuccessDialog',
  component: SuccessDialog,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof SuccessDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {}
  },
  render: ({ open, onClose }: SuccessDialogProps) => {
    const [openDialog, setOpenDialog] = useState(open);
    const handleClickOpen = () => {
      setOpenDialog(true);
    };

    return (
      <Fragment>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Show Success Dialog
        </Button>
        <SuccessDialog open={openDialog} onClose={() => setOpenDialog(false)} />
      </Fragment>
    );
  }
};
