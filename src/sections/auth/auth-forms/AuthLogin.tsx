'use client';

import React, { useState, FocusEvent, SyntheticEvent } from 'react';

// next
import { useRouter } from 'next/navigation';

// material-ui
import { Button, Divider, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { googleSignIn, login } from 'api/auth';
import { IAuthLoginRequest } from 'api/auth/intefaces/request';
import AuthGoogleSignIn, { IGoogleSignIn } from './AuthGoogleSignIn';

// const Google = '/assets/images/icons/google.svg';

// ============================|| AWS CONNITO - LOGIN ||============================ //

const AuthLogin = () => {
  const router = useRouter();
  // const matchDownSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [capsWarning, setCapsWarning] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const onKeyDown = (keyEvent: any) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };

  const signInWithGoogle = async (tokenResponse: IGoogleSignIn) => {
    console.log('tokenResponse', tokenResponse);
    try {
      const request: IGoogleSignIn = {
        email: tokenResponse.email,
        familyName: tokenResponse.familyName,
        givenName: tokenResponse.givenName,
        name: tokenResponse.name,
        picture: tokenResponse.picture,
        sub: tokenResponse.sub,
        emailVerified: tokenResponse.emailVerified
      };
      const resp = await googleSignIn(request);
      localStorage.setItem('token', resp.result.token);
      router.push(APP_DEFAULT_PATH);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          // email: 'info@codedthemes.com',
          // password: '123456',
          email: 'admin',
          userName: 'admin',
          password: '1234',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          email: Yup.string().max(255).required('User Name is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          try {
            const request: IAuthLoginRequest = {
              userName: values.email,
              email: values.email,
              password: values.password
            };
            const resp = await login(request);
            localStorage.setItem('token', resp.result.token);
            router.push(APP_DEFAULT_PATH);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          } catch (error) {
            console.log('error', error);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">User Name</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter user name"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    color={capsWarning ? 'warning' : 'primary'}
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={(event: FocusEvent<any, Element>) => {
                      setCapsWarning(false);
                      handleBlur(event);
                    }}
                    onKeyDown={onKeyDown}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter password"
                  />
                  {capsWarning && (
                    <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
                      Caps lock on!
                    </Typography>
                  )}
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Grid>

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#4aa569',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#2b5f44'
                      }
                    }}
                  >
                    Sign in
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button fullWidth size="large" variant="outlined" color="info" onClick={() => router.push(APP_DEFAULT_PATH)}>
                    Continute with out Login
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="caption"> Login with</Typography>
      </Divider>
      <div style={{ textAlign: 'center', borderRadius: 10 }}>
        <AuthGoogleSignIn onSuccess={(response) => signInWithGoogle(response)} onError={(error) => console.log(error)} />
      </div>
    </>
  );
};

export default AuthLogin;
