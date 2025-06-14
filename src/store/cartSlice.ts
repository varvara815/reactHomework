import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CartState } from '../../custom';

const initialState: CartState = {
  items: {},
  count: 0,
};

const calculateTotalCount = (items: Record<string, number>): number => {
  return Object.values(items).reduce((sum, qty) => sum + qty, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      if (state.items[id]) {
        state.items[id] += quantity;
      } else {
        state.items[id] = quantity;
      }

      state.count = calculateTotalCount(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (state.items[id]) {
        delete state.items[id];
        state.count = calculateTotalCount(state.items);
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      if (state.items[id]) {
        state.items[id] = quantity;
        state.count = calculateTotalCount(state.items);
      }
    },

    clearCart: (state) => {
      state.items = {};
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
