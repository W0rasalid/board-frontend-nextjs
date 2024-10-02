'use client';

import { FC, Fragment, useEffect, useState } from 'react';
import TopicPost from './components/TopicPost';
import { getPostDetail } from 'api/board';
import { IBoardSearchSchema } from 'api/board/interfaces/response';
import { useParams, useRouter } from 'next/navigation';
import MainCard from 'components/MainCard';
import { Box, Grid } from '@mui/material';
import ButtonBack from 'components/button/ButtonBack';
import CommentList from 'views/comment';
import ButtonComment from 'components/button/ButtonComment';

export type PostDetailsProps = {
  postId?: number;
};

const PostDetails: FC<PostDetailsProps> = () => {
  const params = useParams();
  const router = useRouter();
  const [postTopic, setPostTopic] = useState<IBoardSearchSchema | null>(null);
  const [cntComment, setCntComment] = useState<number>(0);

  const featchData = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  return (
    <Fragment>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2, mb: 4 }}>
            <ButtonBack size="medium" onClick={() => router.back()} />
          </Box>
          <MainCard>
            <Fragment>{postTopic && <TopicPost data={postTopic} cntComment={cntComment} />}</Fragment>
            <Box mt={3}>
              <ButtonComment label="Add Comments" size="medium" />
            </Box>
            <CommentList cntComment={(value) => setCntComment(value)} />
          </MainCard>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PostDetails;
