'use client';
import React, { FC } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Button } from '@mui/material';
const googleSvg = '/assets/images/icons/google.svg';
const clientId = '21324859176-6oem7q512qi1e4m4em0d77ea4o9rs1ne.apps.googleusercontent.com';

export interface IGoogleSignIn {
  email: string;
  emailVerified: boolean;
  familyName: string;
  givenName: string;
  name: string;
  picture: string;
  sub: string;
}

export type GoogleSignInProps = {
  onSuccess: (tokenResponse: IGoogleSignIn) => void;
  onError: (errorResponse: any) => void;
};

const GoogleSignIn: FC<GoogleSignInProps> = ({ onSuccess, onError }) => {
  // Initialize the login function using `useGoogleLogin`

  const googleLogin = useGoogleLogin({
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
      });

      const responseData: IGoogleSignIn = {
        email: userInfo.data.email,
        emailVerified: userInfo.data.email_verified,
        familyName: userInfo.data.family_name,
        givenName: userInfo.data.given_name,
        name: userInfo.data.name,
        picture: userInfo.data.picture,
        sub: userInfo.data.sub
      };

      onSuccess(responseData);
    },
    onError: (errorResponse) => onError(errorResponse)
  });

  return (
    <Button variant="outlined" onClick={() => googleLogin()} color="inherit" startIcon={<img src={googleSvg} alt="Google" width={20} />}>
      Sign In with Google
    </Button>
  );
};

const AuthGoogleSignIn: FC<GoogleSignInProps> = ({ onSuccess, onError }) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleSignIn onSuccess={onSuccess} onError={onError} />
    </GoogleOAuthProvider>
  );
};

export default AuthGoogleSignIn;
