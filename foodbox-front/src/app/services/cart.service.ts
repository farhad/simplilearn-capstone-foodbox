import {Injectable} from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(theCartItem: CartItem) {
    let alreadyExists = false;
    // @ts-ignore
    let existingCartItem: CartItem = this.cartItems.find(item => item.id === theCartItem.id);
    alreadyExists = (existingCartItem != undefined);

    if (alreadyExists) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }


  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let item of this.cartItems) {
      totalPriceValue += item.unitPrice * item.quantity;
      totalQuantityValue += item.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(item: CartItem) {
    item.quantity--;
    if (item.quantity == 0) {
      this.remove(item)
    }

    this.computeCartTotals()
  }

  remove(item: CartItem) {
    const itemIndex = this.cartItems.findIndex(
      tempItem => tempItem.id == item.id
    )

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1)
    }
  }
}
