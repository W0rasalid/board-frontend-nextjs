import { useRef, useState, useContext } from 'react';

// next
import { useRouter } from 'next/navigation';
// import { useSession, signOut } from 'next-auth/react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, CardContent, ClickAwayListener, Grid, Paper, Popper, Stack, Typography } from '@mui/material';

// project import
import ProfileTab from './ProfileTab';
// import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// types
// import { ThemeMode } from 'types/config';

import { UserContext } from 'contexts/UserContext';

// types

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const router = useRouter();
  const user = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('nextauth.message');
    router.push('/login');
  };

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          // bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1
          // '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter' },
          // '&:focus-visible': {
          //   outline: `2px solid ${theme.palette.secondary.dark}`,
          //   outlineOffset: 2
          // }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {user && (
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ p: 0.5 }}>
            <Avatar sx={{ bgcolor: '#f35425' }} src={user.profileImage}>
              {user?.firstName.substring(0, 1)}
            </Avatar>
            <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }} color="#F0F0F0">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
          </Stack>
        )}
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                width: 290,
                minWidth: 240,
                maxWidth: 290,
                [theme.breakpoints.down('md')]: {
                  maxWidth: 250
                }
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <CardContent sx={{ px: 2.5, pt: 3 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        {user && (
                          <Stack direction="row" spacing={1.25} alignItems="center">
                            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ p: 0.5 }}>
                              <Avatar sx={{ bgcolor: '#f35425' }} src={user.profileImage}>
                                {user?.firstName.substring(0, 1)}
                              </Avatar>
                              <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                            </Stack>
                          </Stack>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                  {open && (
                    <>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
                      <ProfileTab handleLogout={handleLogout} />
                    </>
                  )}
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
