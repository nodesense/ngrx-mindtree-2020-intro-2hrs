import { Product } from './../models/product';
import { CartItem } from './../models/cart-item';
import { createAction, props } from '@ngrx/store';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, EMPTY_CART } from './action-types';

 
export const addItemToCart = createAction(ADD_ITEM_TO_CART,   
                                          props< { item: CartItem }>());
export const removeItemFromCart = createAction(REMOVE_ITEM_FROM_CART,   props<{ id: number; }>());
export const emptyCart = createAction(EMPTY_CART);

// Fetch data from API, store to ngrx store, used in effect
// initiate api call in effects
export const fetchProducts = createAction('[product fetchProducts]');

// effect will dispatch data obtained from api to store
export const fetchProductsSuccess = createAction('[product fetchProductsSuccess]', 
                                                 props< {products: Product[]} > ());

// effect will dispatch error if anything goes wrong in api call
export const fetchProductsFailed = createAction('[product fetchProductsFailed]', 
                                                 props< { error: any }> ());
