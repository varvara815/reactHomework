import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../custom';

const initialState: AppState = {
  displayPage: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.displayPage = action.payload;
    },
    nextPage: (state) => {
      state.displayPage += 1;
    },
  },
});

export const { setPage, nextPage } = appSlice.actions;
export default appSlice.reducer;
