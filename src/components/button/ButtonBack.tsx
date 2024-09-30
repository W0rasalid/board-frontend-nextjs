'use client';

import React, { ReactNode } from 'react';

import { Avatar, IconButton } from '@mui/material';
import { SxProps } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export type ButtonBackProps = {
  icon?: ReactNode;
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  //   backgroundColor?: string;
  onClick?: () => void;
};

const ButtonBack = ({
  icon,
  sx,
  size = 'medium',
  //   backgroundColor = '#4CAF50',
  onClick,
  ...props
}: ButtonBackProps) => {
  return (
    <React.Fragment>
      <IconButton
        size="small"
        sx={{
          backgroundColor: 'success',
          ...sx
        }}
        {...props}
        onClick={onClick}
      >
        <Avatar color="primary" sx={{ backgroundColor: '#d8e9e4' }}>
          <ArrowBackIcon sx={{ color: '#243831' }} />
        </Avatar>
      </IconButton>
    </React.Fragment>
  );
};

export default ButtonBack;
