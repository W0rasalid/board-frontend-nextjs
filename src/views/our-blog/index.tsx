'use client';

// material-ui
import { Backdrop, Box, CircularProgress, Divider, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { IBoardCreateRequest, IBoardSearchRequest } from 'api/board/interfaces/request';

// project imports
import MainCard from 'components/MainCard';
import { Fragment, useEffect, useState, useContext } from 'react';

import { IBoardSearchSchema } from 'api/board/interfaces/response';
import SearchBox from 'components/input/SearchBox';
import ComunityAutoComplete, { OptionSelect } from 'components/autocomplete/ComunityAutoComplete';
import ButtonAdd from 'components/button/ButtonAdd';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { UserContext } from 'contexts/UserContext';
import LoginDialog from 'components/dialog/LoginDialog';
import CreatePostDialog from 'components/dialog/CreatePostDialog';
import TopicPost from 'views/board/components/TopicPost';
import { getOurBlog } from 'api/our-blog';
import SuccessDialog from 'components/dialog/SuccessDialog';
import { createPost } from 'api/board';

// ==============================|| SAMPLE PAGE ||============================== //

const OurBlogPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [data, setData] = useState<IBoardSearchSchema[]>([]);
  const [keyword, setKeyword] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const userProfile = useContext(UserContext);

  const [openSuccessDialog, setOpenSuccessDialog] = useState<boolean>(false);

  const featchData = async () => {
    setLoading(true);
    try {
      const request: IBoardSearchRequest = {
        categoryId: categoryId ?? null,
        keyword: keyword,
        pageSize: 10,
        pageCurrent: 1
      };
      const res = await getOurBlog(request);
      setData(res?.result?.data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handlePost = async (params: IBoardCreateRequest) => {
    setLoadingPage(true);
    try {
      await createPost(params);
      setLoadingPage(false);
      setOpenSuccessDialog(true);
    } catch (error) {
      setLoadingPage(false);
    }
  };

  useEffect(() => {
    featchData();
  }, [keyword, categoryId]);

  return (
    <Fragment>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={loadingPage}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={2} sx={{ mt: 6, mb: 3 }}>
        <Grid item xs={8} md={9}>
          <SearchBox onSearch={(value) => setKeyword(value)} />
        </Grid>
        <Grid item xs={4} md={3}>
          <Stack direction="row" spacing={2}>
            <ComunityAutoComplete placeholder="Comunity" onChange={(e: OptionSelect | null) => setCategoryId(e?.value ?? null)} />
            <ButtonAdd
              backgroundColor="#4CAF50"
              label="Create"
              size="medium"
              onClick={() => {
                setOpenDialog(true);
              }}
            />
          </Stack>
        </Grid>
      </Grid>

      <MainCard>
        {loading ? (
          <Fragment>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width={'100%'} height={60} />
            <Skeleton variant="text" width={'100%'} height={60} />
          </Fragment>
        ) : (
          <Fragment>
            {data.length ? (
              data?.map((item) => (
                <Fragment key={item.postId}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    <TopicPost data={item} callback={() => featchData()} />
                  </Box>
                  <Divider variant="fullWidth" />
                </Fragment>
              ))
            ) : (
              <Stack direction="row" spacing={2} justifyContent={'center'}>
                <Stack direction="column" spacing={2} justifyContent={'center'}>
                  <DescriptionOutlinedIcon fontSize="large" sx={{ fontSize: 86 }} />
                  <Typography variant="h4">No data</Typography>
                </Stack>
              </Stack>
            )}
          </Fragment>
        )}
      </MainCard>

      {!userProfile ? (
        <LoginDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
      ) : (
        <CreatePostDialog
          open={openDialog}
          handleClose={() => setOpenDialog(false)}
          onCreate={(value) => {
            handlePost(value);
            setOpenDialog(false);
          }}
        />
      )}

      <SuccessDialog
        open={openSuccessDialog}
        message="Post created successfully"
        onClose={() => {
          setOpenSuccessDialog(false);
          featchData();
        }}
      />
    </Fragment>
  );
};

export default OurBlogPage;
