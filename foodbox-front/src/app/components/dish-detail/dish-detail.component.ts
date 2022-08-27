import {Component, OnInit} from '@angular/core';
import {Dish} from "../../common/dish";
import {DishService} from "../../services/dish.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish = new Dish();

  constructor(private dishService: DishService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleDishDetails();
    });
  }

  private handleDishDetails() {
    // @ts-ignore
    const dishId: number = +this.route.snapshot.paramMap.get('id');

    this.dishService.getDishDetails(dishId).subscribe(data => {
        // @ts-ignore
        const categoryId: number = +this.route.snapshot.paramMap.get('categoryId');
        this.dish = data
        this.dish.categoryId = categoryId
      }
    );
  }

  addToCart() {
    this.cartService.addToCart(new CartItem(this.dish));
  }
}
