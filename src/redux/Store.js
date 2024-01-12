import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import searchReducer from "./Slices/searchSlice";
import priceReducer from "./Slices/priceSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    search: searchReducer,
    price: priceReducer,
  },
});
