import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';


import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/reducers/cartReducer';
import { ProductListComponent } from './components/product-list/product-list.component';
import { productReducer } from './state/reducers/productsReducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/effects/product.effects';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cartItems: cartReducer, 
                          product: productReducer }),

    EffectsModule.forRoot([ProductsEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
