// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Image from 'next/legacy/image';
import useConfig from 'hooks/useConfig';
const boardImg = '/assets/images/logo/board-logo.png';

// types
import { MenuOrientation } from 'types/config';

// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        minHeight: isHorizontal ? 'unset' : '60px',
        width: isHorizontal ? { xs: '100%', lg: '424px' } : 'inherit',
        paddingTop: isHorizontal ? { xs: '10px', lg: '0' } : '8px',
        paddingBottom: isHorizontal ? { xs: '18px', lg: '0' } : '8px',
        paddingLeft: isHorizontal ? { xs: '24px', lg: '0' } : open ? '24px' : 0,
        backgroundColor: '#243831'
      }}
    >
      <Box>
        <Image src={boardImg} layout="fixed" width={50} height={30} />
        {open && (
          <Typography variant="h5" color="white" sx={{ color: '#F0F0F0', display: 'inline' }}>
            a Board
          </Typography>
        )}
      </Box>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
