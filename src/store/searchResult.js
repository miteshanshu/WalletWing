import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
};

const setSearchResult = createSlice({
  name: 'setSearchResult',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = setSearchResult.actions;

export default setSearchResult.reducer;