import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import cartReducer from './cartSlice';
import mealsReducer from './mealsSlice';

/**
 * Redux store configuration
 *
 * @description Configures the main Redux store with all application slices.
 * Combines app state, cart state, and meals state into a single store.
 * Uses Redux Toolkit's configureStore for simplified setup with good defaults.
 *
 * @example
 * ```tsx
 * // In main.tsx or App.tsx
 * import { Provider } from 'react-redux';
 * import { store } from './store';
 *
 * <Provider store={store}>
 *   <App />
 * </Provider>
 * ```
 */
export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    meals: mealsReducer,
  },
});

/**
 * Root state type derived from the store
 * Used for typing useSelector hooks and other store-related operations
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * App dispatch type derived from the store
 * Used for typing useDispatch hooks and dispatch operations
 */
export type AppDispatch = typeof store.dispatch;
