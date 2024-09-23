import { ReactNode } from 'react';
// next
import Image from 'next/legacy/image';
// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';
const boardImg = '/assets/images/logo/board-logo.png';

interface Props {
  children: ReactNode;
}

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }: Props) => (
  <Box sx={{ minHeight: '100vh' }}>
    {/* <AuthBackground /> */}
    <Grid
      container
      // direction="row"
      // justifyContent="flex-end"
      // sx={{
      //   minHeight: '100vh'
      // }}
    >
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
        <Image src={boardImg} layout="fixed" width={299} height={230} />
      </Grid>
    </Grid>
  </Box>
);

export default AuthWrapper;
