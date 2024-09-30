'use client';

import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import { SxProps } from '@mui/system';

export type ButtonAddProps = {
  disabled?: boolean;
  /**
   * string หรือ ReactNode สำหรับแสดงข้อความบนปุ่ม
   */
  label: string | ReactNode;
  variant?: 'outlined' | 'contained';
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
};

const MuiButton = ({
  disabled = false,
  label = '',
  variant = 'outlined',
  sx,
  size = 'medium',
  backgroundColor = '#49A569',
  onClick,
  ...props
}: ButtonAddProps) => {
  return (
    <React.Fragment>
      <Button
        disabled={disabled}
        variant={variant}
        color="success"
        size={size}
        sx={{
          background: variant === 'contained' ? backgroundColor : 'transparent',
          color: variant === 'contained' ? 'white' : '#49A569',
          ...sx
        }}
        {...props}
        onClick={onClick}
      >
        <React.Fragment>{label}</React.Fragment>
      </Button>
    </React.Fragment>
  );
};

export default MuiButton;
