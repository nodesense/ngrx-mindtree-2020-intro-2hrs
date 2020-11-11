import { CartItem } from './../../state/models/cart-item';
import { emptyCart, addItemToCart } from './../../state/actions/cart.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems$ : Observable<CartItem[]>;

  constructor(private store: Store<{ cartItems: CartItem[] }>) {
     this.cartItems$ = store.select('cartItems');
   }
   
  ngOnInit(): void {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 100000)
    const item = new CartItem(id, `Product ${id}`, Math.ceil(Math.random() * 1000), 1);

    // how to put the data to store or invoke the reducer
    // dispatch - to call reducers,
    this.store.dispatch(addItemToCart({item: item}));
  }

  emptyCart() {
    this.store.dispatch(emptyCart());
  }

   

}
