'use client';

// next
import NextLink from 'next/link';

// material-ui
import { Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthRegister from 'sections/auth/auth-forms/AuthRegister';

// ================================|| REGISTER ||================================ //

const Register = ({ providers, csrfToken }: any) => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign up</Typography>
          <NextLink href="/login" passHref legacyBehavior>
            <Link variant="body1" color="primary">
              Already have an account?
            </Link>
          </NextLink>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthRegister providers={providers} csrfToken={csrfToken} />
      </Grid>
    </Grid>
  </AuthWrapper>
);

// export async function getServerSideProps(context: NextPageContext) {
//   const providers = await getProviders();
//   const csrfToken = await getCsrfToken(context);
//   return {
//     props: { providers, csrfToken }
//   };
// }

export default Register;
