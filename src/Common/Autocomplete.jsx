/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteComponents = ({ onSearch,flattenedProductsCatItem }) => {

  return (
    <Autocomplete
      className='my-autocomplete cursor-pointer'
      disabled={true}

      id='category-autocomplete'
      options={flattenedProductsCatItem.toString().toLowerCase().split(',')}
      renderInput={(params) => (
        <TextField
          {...params}
          label='All Categories'
          InputProps={{
            ...params.InputProps,
          }}
        
        />
      )}
      onInputChange={(value) => onSearch(value)}
      
    />
  );
};

export default AutocompleteComponents;