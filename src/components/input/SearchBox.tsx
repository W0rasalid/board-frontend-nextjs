import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FC, useState } from 'react';

export type SearchBoxProps = {
  placeholder?: string;
  onSearch?: (value: string | null) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ placeholder, onSearch }) => {
  const [value, setValue] = useState<string | null>();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value ?? null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSearch) {
        onSearch(value ?? null);
      }
    }
  };
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        fullWidth
        placeholder={placeholder ?? 'Search'}
        onChange={(value: React.ChangeEvent<HTMLInputElement>) => setValue(value.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Paper>
  );
};

export default SearchBox;
