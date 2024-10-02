import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

export interface OptionSelect {
  value: number;
  label: string;
}

const categoryMockData: OptionSelect[] = [
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

export type CategorySelectProps = {
  placeholder?: string;
  defaultValue?: number;
  onSelectChange?: (value: OptionSelect | null) => void;
};

const CategorySelect: FC<CategorySelectProps> = ({ placeholder, defaultValue, onSelectChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (onSelectChange) {
      const selectedValue = Number(event.target.value);
      const selectedOption = categoryMockData.find((option) => option.value === selectedValue);
      onSelectChange(selectedOption ?? null);
    }
  };

  return (
    <FormControl sx={{ maxWidth: 200, borderColor: 'green' }}>
      <InputLabel id="input-label" sx={{ color: 'green', borderColor: 'green' }}>
        {placeholder ?? 'Choose a community'}
      </InputLabel>
      <Select
        labelId="select-category"
        id="select-category"
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green' // Change border color here
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'darkgreen' // Border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green' // Border color when focused
          }
        }}
        defaultValue={`${defaultValue}`}
        onChange={handleChange}
      >
        {categoryMockData.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
