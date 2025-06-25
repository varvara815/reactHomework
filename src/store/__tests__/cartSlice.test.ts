import cartReducer, { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart 
} from '../cartSlice';
import type { CartState } from '../../../custom';


describe('Cart Slice', () => {
  const initialState: CartState = {
    items: {},
    count: 0
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: 'INIT' })).toEqual(initialState);
  });

  it('should handle addToCart for a new item', () => {
    const action = addToCart({ id: 'item1', quantity: 2 });
    const state = cartReducer(initialState, action);
    
    expect(state.items).toEqual({ 'item1': 2 });
    expect(state.count).toBe(2);
  });

  it('should handle addToCart for an existing item', () => {
    const state = {
      items: { 'item1': 2 },
      count: 2
    };
    
    const action = addToCart({ id: 'item1', quantity: 3 });
    const newState = cartReducer(state, action);
    
    expect(newState.items).toEqual({ 'item1': 5 });
    expect(newState.count).toBe(5);
  });

  it('should handle removeFromCart', () => {
    const state = {
      items: { 'item1': 2, 'item2': 3 },
      count: 5
    };
    
    const action = removeFromCart('item1');
    const newState = cartReducer(state, action);
    
    expect(newState.items).toEqual({ 'item2': 3 });
    expect(newState.count).toBe(3);
  });

  it('should handle updateQuantity', () => {
    const state = {
      items: { 'item1': 2, 'item2': 3 },
      count: 5
    };
    
    const action = updateQuantity({ id: 'item1', quantity: 4 });
    const newState = cartReducer(state, action);
    
    expect(newState.items).toEqual({ 'item1': 4, 'item2': 3 });
    expect(newState.count).toBe(7);
  });

  it('should handle clearCart', () => {
    const state = {
      items: { 'item1': 2, 'item2': 3 },
      count: 5
    };
    
    const action = clearCart();
    const newState = cartReducer(state, action);
    
    expect(newState.items).toEqual({});
    expect(newState.count).toBe(0);
  });
});
