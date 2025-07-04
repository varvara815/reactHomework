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

/**
 * Async thunk for fetching meals from the API
 *
 * @async
 * @function
 * @description Fetches meal data from the external API. Handles loading states
 * and error handling automatically through Redux Toolkit's createAsyncThunk.
 *
 * @returns {Promise<Meal[]>} Promise that resolves to an array of meal objects
 * @throws {Error} When the API request fails
 *
 * @example
 * ```tsx
 * // In a component
 * const dispatch = useAppDispatch();
 *
 * useEffect(() => {
 *   dispatch(fetchMeals());
 * }, [dispatch]);
 * ```
 */
export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
  const response = await fetch(mealsAPI);
  if (!response.ok) {
    throw new Error('Failed to fetch meals');
  }
  const data = await response.json();
  return data as Meal[];
});

/**
 * Redux slice for managing meals state
 *
 * @description Manages meal data, loading states, category filtering, and pagination.
 * Handles async operations for fetching meals from API and provides actions for
 * category selection and pagination control.
 *
 * @example
 * ```tsx
 * // In a component
 * const dispatch = useAppDispatch();
 * const { allMeals, loading, error, activeCategoryIndex } = useAppSelector(state => state.meals);
 *
 * // Fetch meals
 * dispatch(fetchMeals());
 *
 * // Set active category
 * dispatch(setActiveCategoryIndex(1));
 *
 * // Load more meals
 * dispatch(increaseAmountOfMeals());
 * ```
 */
const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    /**
     * Sets the active category index for filtering meals
     *
     * @param {MealsState} state - Current meals state
     * @param {PayloadAction<number>} action - Action with the category index to set as active
     */
    setActiveCategoryIndex: (state, action: PayloadAction<number>) => {
      state.activeCategoryIndex = action.payload;
    },

    /**
     * Increases the number of meals to display (pagination)
     *
     * @param {MealsState} state - Current meals state
     * @description Adds mealsChunkSize to the current amountOfMeals for "load more" functionality
     */
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
