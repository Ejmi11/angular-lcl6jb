import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
}

)
export class CartService {

  constructor(
     private http: HttpClient
  ) { }

  items = [];

  addToCart(product){
    this.items.push(product);  //appends a product to an array of items
  }

  getItems(){
    return this.items; //collects the items users add to the cart and returns each item with its associated quantity
  }

  clearCart(){
    this.items = [];
    return this.items; //returns an empty array of items
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}