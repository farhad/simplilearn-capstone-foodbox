import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        fullName: [''],
        phoneNumber: [''],
        address: ['']
      })
    })
  }

  onSubmit() {

  }

}
