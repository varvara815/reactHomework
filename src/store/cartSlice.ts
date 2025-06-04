import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../../custom';

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCartCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { incrementCartCount } = cartSlice.actions;
export default cartSlice.reducer;
