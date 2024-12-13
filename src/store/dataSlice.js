// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
   data: [],
   loading: false,
   error: null,
};

// Define the thunk for fetching data
export const fetchData = createAsyncThunk(
   'data/fetchData',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get(
           'https://api.npoint.io/5f0ebd8386e74feb753a'
         );
         return response.data.productData;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
);

// Create a slice
const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

// Export the reducer
export default dataSlice.reducer;