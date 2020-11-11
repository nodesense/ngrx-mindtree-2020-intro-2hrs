import { CartItem } from './../../state/models/cart-item';
import { ProductReducerState } from './../../state/reducers/productsReducer';
import { fetchProducts, addItemToCart } from './../../state/actions/cart.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/state/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productState$ : Observable<ProductReducerState>;
 
  constructor(private store: Store<{ product: ProductReducerState  }>) {
    this.productState$ = this.store.select('product');
  }

  ngOnInit(): void {
    // dispatching an action, that will be intercept by effects to making api call/async code
    this.store.dispatch(fetchProducts());
  }

  addToCart(product: Product) {
    const item : CartItem = new CartItem(product.id, product.name, product.price, 1);
    this.store.dispatch(addItemToCart({item}));
  }

}
