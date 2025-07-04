import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CartState } from '../../custom';

const initialState: CartState = {
  items: {},
  count: 0,
};

/**
 * Calculates the total count of items in the cart
 *
 * @param {Record<string, number>} items - Cart items object with item IDs as keys and quantities as values
 * @returns {number} Total count of all items in the cart
 */
const calculateTotalCount = (items: Record<string, number>): number => {
  return Object.values(items).reduce((sum, qty) => sum + qty, 0);
};

/**
 * Redux slice for managing shopping cart state
 *
 * @description Manages cart items, quantities, and total count. Provides actions for
 * adding items, removing items, updating quantities, and clearing the entire cart.
 * Automatically recalculates total count when cart is modified.
 *
 * @example
 * ```tsx
 * // In a component
 * const dispatch = useAppDispatch();
 * const { items, count } = useAppSelector(state => state.cart);
 *
 * // Add item to cart
 * dispatch(addToCart({ id: 'meal-1', quantity: 2 }));
 *
 * // Update item quantity
 * dispatch(updateQuantity({ id: 'meal-1', quantity: 3 }));
 *
 * // Remove item from cart
 * dispatch(removeFromCart('meal-1'));
 *
 * // Clear entire cart
 * dispatch(clearCart());
 * ```
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Adds an item to the cart or increases quantity if item already exists
     *
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<{id: string, quantity: number}>} action - Action with item ID and quantity to add
     */
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

    /**
     * Removes an item completely from the cart
     *
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<string>} action - Action with item ID to remove
     */
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      if (state.items[id]) {
        delete state.items[id];
        state.count = calculateTotalCount(state.items);
      }
    },

    /**
     * Updates the quantity of an existing item in the cart
     *
     * @param {CartState} state - Current cart state
     * @param {PayloadAction<{id: string, quantity: number}>} action - Action with item ID and new quantity
     */
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

    /**
     * Clears all items from the cart
     *
     * @param {CartState} state - Current cart state
     */
    clearCart: (state) => {
      state.items = {};
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
