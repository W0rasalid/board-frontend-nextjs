'use client';

import React, { ReactNode } from 'react';

import { Button } from '@mui/material';
import { SxProps } from '@mui/system';

export type ButtonCommentProps = {
  disabled?: boolean;
  /**
   * string หรือ ReactNode สำหรับแสดงข้อความบนปุ่ม
   */
  label: string | React.ReactNode;
  icon?: ReactNode;
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  //   backgroundColor?: string;
  onClick?: () => void;
};

const ButtonComment = ({
  disabled = false,
  label = 'Add Comments',
  icon,
  sx,
  size = 'medium',
  //   backgroundColor = '#4CAF50',
  onClick,
  ...props
}: ButtonCommentProps) => {
  return (
    <React.Fragment>
      <Button
        disabled={disabled}
        variant="outlined"
        color="success"
        endIcon={icon}
        size={size}
        sx={{
          color: 'success',
          borderRadius: '8px',
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

export default ButtonComment;
