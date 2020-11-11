import { removeItemFromCart } from './../../state/actions/cart.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/state/models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems$ : Observable<CartItem[]>;

  constructor(private store: Store<{ cartItems: CartItem[] }>) {
     this.cartItems$ = store.select('cartItems');
   }

  ngOnInit(): void {
  }

  removeItem(id: number) {
    const action = removeItemFromCart({id});
     
    this.store.dispatch(action);
  }
}
