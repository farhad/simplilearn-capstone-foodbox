import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = []
  totalPrice: number = 0.00
  totalQuantity: number = 0

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.listCartDetails()
  }


  private listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(data => {
      this.totalPrice = data
    })

    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data
    })

    this.cartService.computeCartTotals()
  }

  incrementQuantity(item: CartItem) {
    this.cartService.addToCart(item)
  }

  decrementQuantity(item: CartItem) {
    this.cartService.decrementQuantity(item);
  }

  remove(item: CartItem) {
    this.cartService.remove(item)
  }
}
