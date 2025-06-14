import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from '../../custom';

const initialState: AppState = {
	isAuthenticated: false,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		}
	},
});

export const { login } = appSlice.actions;
export default appSlice.reducer;
