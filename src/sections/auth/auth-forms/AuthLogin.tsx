'use client';

import React, { useState, FocusEvent, SyntheticEvent } from 'react';

// next
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

// material-ui
import { Button, Divider, FormHelperText, Grid, Link, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { login } from 'api/auth';
import { IAuthLoginRequest } from 'api/auth/intefaces/request';

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

  return (
    <>
      <Formik
        initialValues={{
          // email: 'info@codedthemes.com',
          // password: '123456',
          email: 'admin',
          password: '1234',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
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
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
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

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <NextLink href={'/forget-pass'} passHref legacyBehavior>
                    <Link variant="h6" color="text.primary">
                      Forgot Password?
                    </Link>
                  </NextLink>
                </Stack>
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
                    // color="success"
                    sx={{ backgroundColor: '#4aa569' }}
                  >
                    Sign in
                  </Button>
                </AnimateButton>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    // color="success"
                    //sx={{ backgroundColor: '#4aa569' }}
                  >
                    Sign up
                  </Button>
                </AnimateButton>

                {/* <NextLink href="/register" passHref legacyBehavior>
                  <Link variant="body1" color="primary">
                    Don&apos;t have an account?
                  </Link>
                </NextLink> */}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="caption"> Login with</Typography>
      </Divider>
    </>
  );
};

export default AuthLogin;
