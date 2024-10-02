'use client';

import { FC, Fragment, useEffect, useState } from 'react';
import TopicPost from './components/TopicPost';
import { getPostDetail } from 'api/board';
import { IBoardSearchSchema } from 'api/board/interfaces/response';
import { useParams, useRouter } from 'next/navigation';
import MainCard from 'components/MainCard';
import { Backdrop, Box, CircularProgress, Grid, Skeleton } from '@mui/material';
import ButtonBack from 'components/button/ButtonBack';
import CommentList from 'views/comment';
import ButtonComment from 'components/button/ButtonComment';
import CreateCommentDialog from 'components/dialog/CommentDialog';
import { ICreateCommentRequest } from 'api/comment/interfaces/request';
import { createComment } from 'api/comment';
import SuccessDialog from 'components/dialog/SuccessDialog';

export type PostDetailsProps = {
  postId?: number;
};

const PostDetails: FC<PostDetailsProps> = () => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  const [postTopic, setPostTopic] = useState<IBoardSearchSchema | null>(null);
  const [cntComment, setCntComment] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState<boolean>(false);

  const featchData = async () => {
    setLoading(true);
    try {
      const res = await getPostDetail(Number(params.id));
      const resultData: IBoardSearchSchema = {
        postId: res.result.postId,
        title: res.result.title,
        description: res.result.description,
        categoryId: res.result.category.categoryId,
        categoryName: res.result.category.categoryName,
        author: res.result.author.firstName + ' ' + res.result.author.lastName,
        cntComment: res.result.cntComment,
        createDate: res.result.createDate,
        profileImage: res.result.author.profileImage ?? null
      };

      setPostTopic(resultData);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleCreate = async (value: ICreateCommentRequest) => {
    setOpen(false);
    setLoadingPage(true);
    try {
      await createComment(value);
      setLoadingPage(false);
      setOpenSuccessDialog(true);
    } catch (error) {
      setLoadingPage(false);
      console.error(error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  return (
    <Fragment>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={loadingPage}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={2} mt={5}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2, mb: 4 }}>
            <ButtonBack size="medium" onClick={() => router.back()} />
          </Box>
          <MainCard>
            <Fragment>{postTopic && <TopicPost data={postTopic} cntComment={cntComment} />}</Fragment>
            <Box mt={5}>
              <ButtonComment label="Add Comments" size="medium" onClick={() => setOpen(true)} />
            </Box>
            {loading ? (
              <Box mt={3}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width={'100%'} height={60} />
                <Skeleton variant="text" width={'100%'} height={60} />
              </Box>
            ) : (
              <CommentList cntComment={(value) => setCntComment(value)} />
            )}
          </MainCard>
        </Grid>
      </Grid>

      <CreateCommentDialog
        open={open}
        postId={Number(params.id)}
        handleClose={() => setOpen(false)}
        onCreate={(value) => handleCreate(value)}
      />

      <SuccessDialog
        open={openSuccessDialog}
        message="Comment created successfully"
        onClose={() => {
          setOpenSuccessDialog(false);
          featchData();
        }}
      />
    </Fragment>
  );
};

export default PostDetails;
