import { TextField } from '@mui/material';
import { FC } from 'react';

export type MuiTextFieldProps = {
  id?: string;
  label: string;
  variant: 'standard' | 'outlined' | 'filled';

  /**
   * color สีของ label และ border
   */
  color?: string;

  /**
   * shrink ข้อความเมื่อมีการกรอกข้อมูล
   */
  shrink?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string | null) => void;
  value?: string | null;
  defaultValue?: string | null;
};

const MuiTextField: FC<MuiTextFieldProps> = ({
  id,
  label,
  variant,
  color = '#3d8116',
  shrink,
  multiline,
  rows,
  error,
  helperText,
  onChange,
  value,
  defaultValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event?.target?.value ?? null);
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      value={value ?? ''}
      defaultValue={defaultValue ?? ''}
      variant={variant}
      multiline={multiline}
      rows={rows}
      error={error}
      helperText={error && helperText}
      InputLabelProps={{
        shrink: shrink
      }}
      sx={{
        '& label': {
          color: color ?? 'green' // Default label color
        },
        '& label.Mui-focused': {
          color: color ?? 'green' // Label color when focused
        },
        '& label.MuiInputLabel-shrink': {
          color: color ?? 'green' // Label color when it shrinks (moves up)
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: color ?? 'green'
          },
          '&:hover fieldset': {
            borderColor: color ?? 'darkgreen'
          },
          '&.Mui-focused fieldset': {
            borderColor: color ?? 'green'
          }
        }
      }}
      onChange={handleChange}
    />
  );
};

export default MuiTextField;
