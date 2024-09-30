import { ReactNode } from 'react';
// next
import Image from 'next/legacy/image';
// material-ui
import { Box, Grid, Typography, styled } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';

// project import
import AuthCard from './AuthCard';
import { Stack } from '@mui/system';
const boardImg = '/assets/images/logo/board-logo.png';

interface Props {
  children: ReactNode;
}

const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});
// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }: Props) => (
  <Box sx={{ minHeight: '100vh' }}>
    {/* <AuthBackground /> */}
    <RootStyle>
      <Grid container>
        <Grid
          item
          xs={8}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 0px)' },
            backgroundColor: '#243831'
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 0px)' },
            backgroundColor: '#2B5F44',
            backgroundImage: 'url(/static/images/auth/1.jpg)'
          }}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Image src={boardImg} layout="fixed" width={299} height={230} />
            <Typography variant="h4" sx={{ color: 'white', mt: 2 }}>
              a Board
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
    <MobileView>
      <Grid container height="100vh">
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            // minHeight: 'calc(50vh - 0px)',
            backgroundColor: '#243831'
          }}
        >
          <Grid item>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Image src={boardImg} layout="fixed" width={180} height={130} />
              <Typography variant="h4" sx={{ color: 'white', mt: 2 }}>
                a Board
              </Typography>
            </Stack>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </MobileView>
  </Box>
);

export default AuthWrapper;
