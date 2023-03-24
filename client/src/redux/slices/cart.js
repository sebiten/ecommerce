import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  cart: [],
  expressShipping: false,
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    cartItemAdd: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === existingItem.id ? payload : item
        );
      } else {
        state.cart = [...state.cart, payload];
      }
      state.loading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, cartItemAdd, setError } = cartSlice.actions;
export default cartSlice.reducer;

export const cartSelector = (state) => state.cart;
