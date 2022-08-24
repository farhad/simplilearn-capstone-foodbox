import {Component, OnInit} from '@angular/core';
import {DishService} from "../../services/dish.service";
import {Dish} from "../../common/dish";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  public dishes!: Dish[]

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.listDishes();
  }

  listDishes() {
    this.dishService.getDishes().subscribe(data => this.dishes = data)
  }

}
