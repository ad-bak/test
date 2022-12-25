import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "./DUMMY_DATA";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: DUMMY_DATA },
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
    remove(state, action) {
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    },
    edit(state, action) {
      return {
        //function that finds product with title and modifies it from action.payload
        products: state.products.map((product) => {
          if (product.title === action.payload.findTitle) {
            return {
              ...product,
              title: action.payload.title,
              price: action.payload.price,
              url: action.payload.url,
              description: action.payload.description,
              quantity: action.payload.quantity,
            };
          }
          return product;
        }),
      };
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
