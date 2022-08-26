import {Component, OnInit} from '@angular/core';
import {Dish} from "../../common/dish";
import {DishService} from "../../services/dish.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish = new Dish();

  constructor(private dishService: DishService,
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

    this.dishService.getDishDetails(dishId).subscribe(data => this.dish = data);
  }
}