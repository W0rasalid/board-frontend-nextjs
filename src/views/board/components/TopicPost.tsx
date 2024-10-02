'use client';

// material-ui
import { Avatar, Backdrop, Chip, CircularProgress, IconButton, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { IBoardSearchSchema } from 'api/board/interfaces/response';
import { FC, Fragment, useEffect, useState } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import dayjs from 'dayjs';
import { usePathname, useRouter } from 'next/navigation';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteConfirmDialog from 'components/dialog/ConfirmDeleteDialog';
import { deletePost, editPost } from 'api/board';
import SuccessDialog from 'components/dialog/SuccessDialog';
import EditPostDialog from 'components/dialog/EditPostDialog';
import { IBoardEditRequest } from 'api/board/interfaces/request';

type TopicPostProps = {
  data: IBoardSearchSchema;
  cntComment?: number;
  callback?: () => void;
};

const TopicPost: FC<TopicPostProps> = ({ data, cntComment, callback }) => {
  const path = usePathname();
  const permission: boolean = path.includes('/our-blog');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState<boolean>(false);
  const [messageDialog, setMessageDialog] = useState<string>('');

  const handleDelete = async (postId: number) => {
    setLoading(true);
    setOpenDeleteDialog(false);
    try {
      await deletePost(Number(postId));

      setLoading(false);
      setMessageDialog('Post deleted successfully');
      setOpenSuccessDialog(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (params: IBoardEditRequest) => {
    setLoading(true);
    setOpenEditDialog(false);
    try {
      await editPost(params);
      console.log('edit post', params);
      setLoading(false);
      setMessageDialog('Post edited successfully');
      setOpenSuccessDialog(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        spacing={2}
      >
        <Avatar src={data?.profileImage ?? ''} sx={{ bgcolor: '#f35425' }}>
          {data?.author?.substring(0, 1)}
        </Avatar>
        <Stack direction="column">
          <Typography component="span" variant="h5" sx={{ color: '#A0AFBA', display: 'inline' }}>
            {data.author}
          </Typography>
          <Typography variant="h6" sx={{ display: 'inline' }} color="#939494">
            {dayjs(data.createDate).format('DD/MM/YYYY HH:mm')}
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
          {permission && (
            <IconButton onClick={() => setOpenEditDialog(true)}>
              <EditOutlinedIcon />
            </IconButton>
          )}
          {permission && (
            <IconButton onClick={() => setOpenDeleteDialog(true)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Stack>

      <Box onClick={() => router.push(`/board/${data.postId}`)}>
        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
          <Chip label={data.categoryName} />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Typography component="span" variant="h4" sx={{ color: 'text.primary', display: 'inline' }}>
            {data.title}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Typography component="span" variant="caption" sx={{ color: 'text.primary', display: 'inline' }}>
            {data.description}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <ChatBubbleOutlineIcon htmlColor="#939494" />
          <Typography variant="subtitle2" sx={{ color: '#939494', display: 'inline' }}>
            {`${cntComment ?? 0} Comments`}
          </Typography>
        </Stack>
      </Box>

      <EditPostDialog open={openEditDialog} data={data} handleClose={() => setOpenEditDialog(false)} onEdit={handleEdit} />
      <DeleteConfirmDialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} onDelete={() => handleDelete(data.postId)} />
      <SuccessDialog
        open={openSuccessDialog}
        onClose={() => {
          setOpenSuccessDialog(false);
          if (callback) {
            callback();
          }
        }}
        message={messageDialog}
      />
    </Fragment>
  );
};

export default TopicPost;
