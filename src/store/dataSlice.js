import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { catalog, validCatalog } from "../utils/catalog";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { rejectWithValue, signal }) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_CATALOG_URL ||
          "https://api.npoint.io/5f0ebd8386e74feb753a",
        { timeout: 6000, signal },
      );
      if (!validCatalog(response.data?.productData))
        throw new Error("Invalid catalog response");
      return response.data.productData;
    } catch (error) {
      return rejectWithValue(error.message || "Catalog update unavailable");
    }
  },
  { condition: (_, { getState }) => !getState().data.loading },
);
const dataSlice = createSlice({
  name: "data",
  initialState: { data: catalog, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) =>
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
      }),
});
export default dataSlice.reducer;
