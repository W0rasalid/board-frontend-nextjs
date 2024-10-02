import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IBoardEditRequest } from 'api/board/interfaces/request';
import { IBoardSearchSchema } from 'api/board/interfaces/response';
import { OptionSelect } from 'components/autocomplete/ComunityAutoComplete';
import MuiButton from 'components/button/MuiButton';
import MuiTextField from 'components/input/TextField';
import CategorySelect from 'components/select/CategorySelect';
import React, { Fragment, useEffect } from 'react';
import { FC } from 'react';

export type EditPostDialogProps = {
  open: boolean;
  data: IBoardSearchSchema;
  handleClose?: () => void;
  onEdit?: (value: IBoardEditRequest) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditPostDialog: FC<EditPostDialogProps> = ({ open, data, handleClose, onEdit }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<OptionSelect | null>(null);
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const handleEdit = async () => {
    const request: IBoardEditRequest = {
      postId: data.postId,
      categoryId: selectedCategory?.value ?? data.categoryId,
      title: title,
      description: description
    };

    if (onEdit) {
      onEdit(request);
    }
  };

  const onClose = () => {
    if (handleClose) {
      setTitle('');
      setDescription('');
      handleClose();
    }
  };

  useEffect(() => {
    if (open) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [open]);

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
          <Typography variant="h3">Edit Post</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} flexDirection="column" sx={{ p: 1 }}>
            <CategorySelect
              placeholder="Choose a community"
              defaultValue={data.categoryId}
              onSelectChange={(value) => {
                console.log('CategorySelect', value);
                setSelectedCategory(value);
              }}
            />
            <MuiTextField
              id="txtTitle"
              color="black"
              label="Title"
              value={title ?? ''}
              variant="outlined"
              onChange={(value) => setTitle(value ?? '')}
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
              onChange={(value) => setDescription(value ?? '')}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} justifyContent={'flex-end'} justifyItems={'flex-end'}>
            <Grid item xs={12} md={12} lg={2}>
              <MuiButton variant="outlined" label="Cancel" sx={{ width: '100%' }} onClick={onClose} />
            </Grid>
            <Grid item xs={12} md={12} lg={2}>
              <MuiButton variant="contained" label="Post" sx={{ width: '100%' }} onClick={() => handleEdit()} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditPostDialog;
