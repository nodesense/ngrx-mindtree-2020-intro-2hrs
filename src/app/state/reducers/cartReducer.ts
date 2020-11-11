import { CartItem } from './../models/cart-item';
import { addItemToCart, emptyCart, removeItemFromCart } from './../actions/cart.actions';
// business logic written
// no async, only sync code
// async codes like timer, apis call, websocket callbacks are implemented in Effects
// pure function

// only two arg, state, action, return new state

import { createReducer, on } from '@ngrx/store';
  
export const initialState: CartItem[] = [];
 
const _cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, action) => [...state, action.item]   ),
  on(removeItemFromCart, (state, action) =>  state.filter(item => item.id !== action.id)),
  on(emptyCart, (state) =>  [] )
);
 
export function cartReducer(state, action) {
  return _cartReducer(state, action);
}