'use client';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { FC, Fragment, useEffect, useState } from 'react';
import { getCommentList } from 'api/comment';
import { IGetCommentRequest } from 'api/comment/interfaces/request';
import { useParams } from 'next/navigation';
import { ICommentSearchResponse } from 'api/comment/interfaces/response';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

export type CommentListProps = {
  cntComment?: (value: number) => void;
};

const CommentList: FC<CommentListProps> = ({ cntComment }) => {
  const params = useParams();
  const [comment, setComment] = useState<ICommentSearchResponse[]>([]);

  const featchData = async () => {
    const request: IGetCommentRequest = {
      postId: Number(params.id)
    };
    try {
      const res = await getCommentList(request);
      console.log(res);
      setComment(res.result.data);
      handleCount(res.result.data.length);
    } catch (error) {}
  };

  const handleCount = async (count: number) => {
    if (cntComment) {
      cntComment(count);
    }
  };

  useEffect(() => {
    featchData();
  }, []);

  return (
    <Fragment>
      {comment.map((item, index) => (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Box>
                  <Typography variant="h6" sx={{ display: 'inline' }} color="text.primary">
                    {item.author}
                  </Typography>
                  <Typography variant="h6" sx={{ display: 'inline', ml: 2 }} color="#939494">
                    {dayjs(item.createDate).format('DD/MM/YYYY HH:mm')}
                  </Typography>
                </Box>
              }
              secondary={
                <Fragment>
                  <Typography variant="caption" sx={{ color: 'text.primary' }}>
                    {item.description}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
        </List>
      ))}
    </Fragment>
  );
};

export default CommentList;
