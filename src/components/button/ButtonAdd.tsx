'use client';

import React, { ReactNode } from 'react';

import { Button } from '@mui/material';
import { SxProps } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export type ButtonAddProps = {
  disabled?: boolean;
  /**
   * string หรือ ReactNode สำหรับแสดงข้อความบนปุ่ม
   */
  label: string | React.ReactNode;
  icon?: ReactNode;
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
};

const ButtonAdd = ({
  disabled = false,
  label = 'Create',
  icon,
  sx,
  size = 'medium',
  backgroundColor = '#4CAF50',
  onClick,
  ...props
}: ButtonAddProps) => {
  return (
    <React.Fragment>
      <Button
        disabled={disabled}
        variant="contained"
        color="success"
        endIcon={icon ? icon : <AddCircleOutlineIcon />}
        size={size}
        sx={{
          background: backgroundColor ? backgroundColor : '',
          color: 'white',
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

export default ButtonAdd;
