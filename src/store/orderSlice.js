import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "orders",
  initialState: { items: [] },
  reducers: {
    addDemoOrder(state, { payload }) {
      state.items.unshift(payload);
      state.items = state.items.slice(0, 20);
    },
  },
});
export const { addDemoOrder } = orderSlice.actions;
export default orderSlice.reducer;
