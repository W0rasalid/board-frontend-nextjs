import { Dialog, DialogContent, DialogTitle, FormControl, IconButton, Slide, Stack, TextField, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ICreateCommentRequest } from 'api/comment/interfaces/request';
import MuiButton from 'components/button/MuiButton';
import React, { Fragment, FC, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, FormikProps } from 'formik';

// third party
import * as Yup from 'yup';

export type CreateCommentDialogProps = {
  postId: number;
  open: boolean;
  handleClose?: () => void;
  onCreate?: (value: ICreateCommentRequest) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateCommentDialog: FC<CreateCommentDialogProps> = ({ postId, open, handleClose, onCreate }) => {
  const formRef = useRef<FormikProps<ICreateCommentRequest>>(null);

  const handleCreate = async (params: ICreateCommentRequest) => {
    if (onCreate) {
      onCreate(params);
    }
  };

  const onClose = () => {
    if (handleClose) {
      formRef?.current?.resetForm();
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
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Stack flexDirection="row" justifyContent="flex-end">
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="h4">Add Comments</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} flexDirection="column" sx={{ p: 1 }}>
            <Formik
              innerRef={formRef}
              initialValues={{
                postId,
                description: ''
              }}
              validationSchema={Yup.object().shape({
                description: Yup.string().max(255).required('Please enter your post description')
              })}
              onSubmit={async (values) => {
                try {
                  await handleCreate(values);
                } catch (error) {
                  console.log('error', error);
                }
              }}
            >
              {({ errors, handleChange, handleSubmit, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Stack spacing={2} flexDirection="column">
                    <FormControl fullWidth>
                      <TextField
                        placeholder="What’s on your mind..."
                        variant="outlined"
                        fullWidth
                        size="medium"
                        multiline
                        rows={5}
                        name="description"
                        onChange={handleChange}
                        value={values?.description}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description}
                        sx={{
                          '& label': {
                            color: '#DADADA'
                          },
                          '& label.Mui-focused': {
                            color: '#DADADA'
                          },
                          '& label.MuiInputLabel-shrink': {
                            color: '#DADADA'
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#DADADA'
                            },
                            '&:hover fieldset': {
                              borderColor: '#DADADA'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#DADADA'
                            }
                          }
                        }}
                      />
                    </FormControl>
                  </Stack>
                </form>
              )}
            </Formik>
            <MuiButton variant="outlined" label="Cancel" onClick={onClose} />
            <MuiButton variant="contained" label="Post" onClick={() => formRef?.current?.handleSubmit()} />
          </Stack>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateCommentDialog;
