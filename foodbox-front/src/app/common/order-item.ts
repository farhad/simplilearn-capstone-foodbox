import {CartItem} from "./cart-item";

export class OrderItem {
  imageUrl: string;
  quantity: number;
  unitPrice: number;
  dishId: number;

  constructor(cartItem: CartItem) {
    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.dishId = cartItem.id
  }
}
