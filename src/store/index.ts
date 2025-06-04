import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import cartReducer from './cartSlice';
import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
