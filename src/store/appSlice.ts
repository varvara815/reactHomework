import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from '../../custom';

const initialState: AppState = {
  isAuthenticated: false,
};

/**
 * Redux slice for managing application-wide state
 *
 * @description Manages global application state including user authentication status.
 * Uses Redux Toolkit's createSlice for simplified state management with Immer integration.
 *
 * @example
 * ```tsx
 * // In a component
 * const dispatch = useAppDispatch();
 * const isAuthenticated = useAppSelector(state => state.app.isAuthenticated);
 *
 * // To log in user
 * dispatch(login());
 * ```
 */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /**
     * Sets user authentication status to true
     *
     * @param {AppState} state - Current application state
     * @description Marks the user as authenticated, typically called after successful login
     */
    login: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { login } = appSlice.actions;
export default appSlice.reducer;
