import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Dish} from "../common/dish";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})

export class DishService {
  private listUrl = `${environment.apiBaseUrl}/dish`

  constructor(private http: HttpClient) {
  }

  public getDishes(categoryId: number): Observable<Dish[]> {
    const url = `${this.listUrl}/search/findDishByCategoryId?id=${categoryId}`;
    return this.http.get<GetResponse>(url).pipe(map(response => response._embedded.dish));
  }

  public getDishDetails(dishId: number): Observable<Dish> {
    const url = `${this.listUrl}/${dishId}`;
    return this.http.get<Dish>(url);
  }
}

interface GetResponse {
  _embedded: {
    "dish": Dish[]
  }
}
