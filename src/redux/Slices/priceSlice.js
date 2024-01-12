// src/redux/Slices/priceSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "price",
  initialState: {
    selectedPriceRange: null,
  },
  reducers: {
    setPriceRange: (state, action) => {
      state.selectedPriceRange = action.payload;
    },
  },
});

export const { setPriceRange } = priceSlice.actions;
export const selectPriceRange = (state) => state.price.selectedPriceRange;

export default priceSlice.reducer;
