import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type { Meal, MealsState } from '../../custom';
import { mealsAPI, mealsChunkSize } from '../components/constants';

const initialState: MealsState = {
  allMeals: [],
  loading: false,
  error: null,
  activeCategoryIndex: 0,
  amountOfMeals: mealsChunkSize,
  mealsChunkSize: mealsChunkSize,
};

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
  const response = await fetch(mealsAPI);
  if (!response.ok) {
    throw new Error('Failed to fetch meals');
  }
  const data = await response.json();
  return data as Meal[];
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setActiveCategoryIndex: (state, action: PayloadAction<number>) => {
      state.activeCategoryIndex = action.payload;
    },
    increaseAmountOfMeals: (state) => {
      state.amountOfMeals += state.mealsChunkSize;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.allMeals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch meals';
      });
  },
});

export const { setActiveCategoryIndex, increaseAmountOfMeals } =
  mealsSlice.actions;
export default mealsSlice.reducer;
