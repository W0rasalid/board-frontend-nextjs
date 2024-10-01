// material-ui
import { Theme } from '@mui/material/styles';
import { Avatar, Box, Button, Popover, Stack, Typography, useMediaQuery } from '@mui/material';

// project import

import Profile from './Profile';
import FullScreen from './FullScreen';
// import MobileSection from './MobileSection';

import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/DashboardLayout/Drawer/DrawerHeader';

// type
import { MenuOrientation } from 'types/config';
import MuiButton from 'components/button/MuiButton';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();
  const router = useRouter();
  const userProfile = useContext(UserContext);

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {!downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
      {!downLG && <FullScreen />}
      {/* {downLG && <MobileSection />} */}
      {!userProfile && <MuiButton label="LogIn" size="medium" variant="contained" onClick={() => router.push('/login')} />}
      {userProfile && <Profile />}
    </>
  );
};

export default HeaderContent;
