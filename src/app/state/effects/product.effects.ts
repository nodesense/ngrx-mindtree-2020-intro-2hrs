import { fetchProductsSuccess } from './../actions/cart.actions';
import { createAction } from '@ngrx/store';

// effects are called as middlewares
// they intercept the actions dispatched to reducers
// where we can write cross cutting concerns code
// 1. Making API calls
// 2. storing tokens to local stoarge
// 3. Check if the data in cache/use cache
// ngrx/effects

// state/effects/auth.effects.ts
import { environment } from './../../../environments/environment';
import { EMPTY, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
 import { catchError, map, mergeMap } from 'rxjs/operators';
import { fetchProducts } from '../actions/cart.actions';
 
// Effects are nothing but Services
@Injectable()
export class ProductsEffects {
    constructor(private http: HttpClient, 
                private action$: Actions) {
                   
                    action$
                   // fitler, that allows once LoginAction
                   .pipe(ofType(fetchProducts))
                   .subscribe(action => console.log("***", action)) 
                }

    
    // this should an action, that will be dispatched by effects automatically
    fetchProducts$: Observable<Action> = createEffect ( () => this.action$.pipe(
        ofType(fetchProducts),
        // merge the observable returned from http.post
        mergeMap( action => {
             
            return this.http.get<any>('http://localhost:7070/api/products')
                            .pipe (map ( (products: any) => {
                                
                                  console.log("got data from api ", products);
                             
                                // this action is automatically dispatched by effects
                                // this actions shall be dispatched automatically to the store
                                return fetchProductsSuccess({products: products})
                            }))
        })
    ) ) 
  
       
 }