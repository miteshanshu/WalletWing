import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  productItems: [],
  limit: 4,
};

const productCompareSlice = createSlice({
  name: 'productCompare',
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const productExists = state.productItems.find(item => item.id === action.payload.id);
      if (!productExists) {
        state.productItems.push(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      state.productItems = state.productItems.filter((item) => item.id !== action.payload);
    },
    removeAllFromCompare: (state) => {
      state.productItems = [];
    },
  },
});

export const { addToCompare, removeFromCompare,removeAllFromCompare } = productCompareSlice.actions;

export default productCompareSlice.reducer;