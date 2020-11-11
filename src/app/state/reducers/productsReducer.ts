import { Product } from './../models/product';
import { CartItem } from './../models/cart-item';
import { fetchProductsSuccess, fetchProductsFailed } from './../actions/cart.actions';
 
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { state } from '@angular/animations';
  
export interface ProductReducerState {
    products: Product[];
    error   : any
}


export const initialState: ProductReducerState = { products: [], 
                                                    error: undefined };
 
const _productReducer = createReducer(
  initialState,
  on(fetchProductsSuccess, (state, action) => ({...state, products: action.products})  ),
  on(fetchProductsFailed, (state, action) =>  ({...state, error: action.error}) )
);
 
export function productReducer(state, action) {
  return _productReducer(state, action);
}