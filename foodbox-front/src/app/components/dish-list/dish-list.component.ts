import {Component, OnInit} from '@angular/core';
import {DishService} from "../../services/dish.service";
import {Dish} from "../../common/dish";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  public dishes!: Dish[]
  // @ts-ignore
  private currentCategoryId: number;

  constructor(private dishService: DishService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.listDishes());
  }

  listDishes() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // @ts-ignore
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    this.dishService.getDishes(this.currentCategoryId).subscribe(data => this.dishes = data)
  }

  addToCart(dish: Dish) {
    this.cartService.addToCart(new CartItem(dish));
  }
}
