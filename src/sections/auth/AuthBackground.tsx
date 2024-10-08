'use client';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// types
import { ThemeDirection } from 'types/config';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(18px)',
        zIndex: -1,
        bottom: 0,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    >
      {/* Input Background */}
    </Box>
  );
};

export default AuthBackground;
