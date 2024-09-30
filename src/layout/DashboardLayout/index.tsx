'use client';

import { useEffect, ReactNode } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import useConfig from 'hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LAYOUT ||============================== //

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const theme = useTheme();
  const { menuMasterLoading } = useGetMenuMaster();
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  // const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer } = useConfig();
  // const [proFile, setProFile] = React.useState<IUserProfile>();

  // const checkAuth = async () => {
  //   const resp = await authMe();
  //   setProFile(resp.result as IUserProfile);
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen(!matchDownXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    // <UserContext.Provider value={proFile}>
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />
      <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Container
          maxWidth={container ? 'xl' : false}
          sx={{
            ...(container && { px: { xs: 0, sm: 2 } }),
            position: 'relative',
            minHeight: 'calc(100vh - 50px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          {children}
          <Footer />
        </Container>
      </Box>
    </Box>
    // </UserContext.Provider>
  );
};

export default DashboardLayout;
