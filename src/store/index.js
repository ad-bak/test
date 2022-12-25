import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./product-slice";
import adminSlice from "./admin-slice.js";

const store = configureStore({
  reducer: { products: productsSlice.reducer, admin: adminSlice.reducer },
});

export default store;
