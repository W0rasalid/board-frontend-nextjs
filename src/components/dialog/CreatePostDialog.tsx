import { Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IBoardCreateRequest } from 'api/board/interfaces/request';
import { OptionSelect } from 'components/autocomplete/ComunityAutoComplete';
import MuiButton from 'components/button/MuiButton';
import MuiTextField from 'components/input/TextField';
import CategorySelect from 'components/select/CategorySelect';
import React, { Fragment } from 'react';
import { FC } from 'react';

export type CreatePostDialogProps = {
  open: boolean;
  handleClose?: () => void;
  onCreate?: (value: IBoardCreateRequest) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePostDialog: FC<CreatePostDialogProps> = ({ open, handleClose, onCreate }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<OptionSelect | null>(null);
  const [title, setTitle] = React.useState<string | null>('');
  const [description, setDescription] = React.useState<string | null>('');

  const handlePost = async () => {
    console.log('handlePost');
    const request: IBoardCreateRequest = {
      categoryId: Number(selectedCategory?.value),
      title: title ?? null,
      description: description ?? null
    };

    if (onCreate) {
      onCreate(request);
    }
  };

  const onClose = () => {
    if (handleClose) {
      setTitle('');
      setDescription('');
      handleClose();
    }
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        maxWidth="xs"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          if (handleClose) {
            setTitle('');
            setDescription('');
            handleClose();
          }
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h3">Create Post</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} flexDirection="column" sx={{ p: 1 }}>
            <CategorySelect placeholder="Choose a community" onSelectChange={(value) => setSelectedCategory(value)} />
            <MuiTextField
              id="txtTitle"
              color="black"
              label="Title"
              value={title ?? ''}
              variant="outlined"
              onChange={(value) => setTitle(value ?? null)}
              error={title === null || title === ''}
              helperText="Please enter title"
            />
            <MuiTextField
              id="txtTitle"
              color="black"
              label="What’s on your mind..."
              value={description ?? ''}
              variant="outlined"
              multiline
              rows={5}
              error={description === null || description === ''}
              helperText="Please enter your post description"
              onChange={(value) => setDescription(value ?? null)}
            />
            <MuiButton variant="outlined" label="Cancel" onClick={onClose} />
            <MuiButton variant="contained" label="Post" onClick={() => handlePost()} />
          </Stack>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreatePostDialog;
