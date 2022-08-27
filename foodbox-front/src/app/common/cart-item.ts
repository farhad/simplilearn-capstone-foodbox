import {Dish} from "./dish";

export class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(dish: Dish) {
    this.id = dish.id;
    this.name = dish.name;
    this.imageUrl = dish.imagePath;
    this.unitPrice = dish.price;
    this.quantity = 1;
  }
}
