// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; All rights reserved</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link href="https://resume-worasalid.vercel.app/" target="_blank" variant="caption" color="textPrimary">
        About us
      </Link>
      <Link
        href="https://github.com/W0rasalid/board-backend-nestjs/tree/feature/board"
        target="_blank"
        variant="caption"
        color="textPrimary"
      >
        GitHub
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
