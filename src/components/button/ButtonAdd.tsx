'use client';

import React from 'react';

import { Button } from '@mui/material';
import { SxProps } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export type ButtonAddProps = {
  disabled?: boolean;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  /**
   * รับ sx custom style จาก Material UI
   */
  sx?: SxProps;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
};

const ButtonAdd = ({
  disabled = false,
  label,
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
