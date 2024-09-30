import { Autocomplete, SxProps, TextField } from '@mui/material';
import { FC, Fragment } from 'react';

export type ComunityAutoCompleteProps = {
  placeholder?: string;
  onChange?: (value: OptionSelect | null) => void;
  sx?: SxProps;
};

export interface OptionSelect {
  value: number;
  label: string;
}

const comunityMockData: OptionSelect[] = [
  {
    value: 1,
    label: 'Food'
  },
  {
    value: 2,
    label: 'Pets'
  },
  {
    value: 3,
    label: 'Health'
  },
  {
    value: 4,
    label: 'Fashion'
  },
  {
    value: 5,
    label: 'Exercise'
  },
  {
    value: 6,
    label: 'Others'
  },
  {
    value: 7,
    label: 'History'
  }
];

const ComunityAutoComplete: FC<ComunityAutoCompleteProps> = ({ placeholder, onChange, sx }) => {
  const handleChange = (value: OptionSelect | null) => {
    if (onChange) {
      onChange(value ?? null);
    }
  };

  return (
    <Fragment>
      <Autocomplete
        disablePortal
        sx={{
          width: 300,
          borderColor: 'green',
          '&:hover': {
            borderColor: 'red'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'green' // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'green' // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'green' // Border color when focused
            }
          },
          ...sx
        }}
        options={comunityMockData}
        renderInput={(params) => (
          <TextField {...params} label={placeholder ?? placeholder} variant="outlined" sx={{ input: { color: 'green' } }} />
        )}
        onChange={(_event, value: OptionSelect | null) => {
          handleChange(value);
        }}
      />
    </Fragment>
  );
};

export default ComunityAutoComplete;
