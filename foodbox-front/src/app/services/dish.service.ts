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

  public getDishes(): Observable<Dish[]> {
    return this.http.get<GetResponse>(this.listUrl).pipe(map(response => response._embedded.dish));
  }
}

interface GetResponse {
  _embedded: {
    "dish": Dish[]
  }
}
