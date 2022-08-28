import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CheckoutService} from "../../services/checkout.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../common/order";
import {CartService} from "../../services/cart.service";
import {OrderItem} from "../../common/order-item";
import {PlaceOrderRequest} from "../../common/place-order-request";
import {Address} from "../../common/address";
import {Customer} from "../../common/customer";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private formBuilder: FormBuilder,
              private checkoutService: CheckoutService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.cartService.totalPrice.subscribe(data => {
      this.totalPrice = data
    })

    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data
    })

    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        fullName: [''],
        phoneNumber: [''],
        address: ['']
      })
    })
  }

  onSubmit() {
    let order = new Order();
    order.totalPrice = this.totalPrice
    order.totalQuantity = this.totalQuantity

    let orderItems = this.cartService.cartItems.map(data => {
      return new OrderItem(data)
    })

    let request = new PlaceOrderRequest();

    let address = new Address();
    address.address = this.checkoutForm.controls['customer'].value.address
    request.address = address

    let customer = new Customer();
    customer.fullName = this.checkoutForm.controls['customer'].value.fullName
    customer.phoneNumber = this.checkoutForm.controls['customer'].value.phoneNumber
    request.customer = customer

    request.order = order
    request.orderItems = orderItems

    this.checkoutService.placeOrder(request).subscribe(data => {
      alert(`your order is placed successfully. Tracking number: ${data.trackingNumber}`)
    })
  }

}
