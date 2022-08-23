import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../category";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})

export class CategoryService {
  private listUrl = `${environment.apiBaseUrl}/category`

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<GetResponse>(this.listUrl).pipe(map(response => response._embedded.category));
  }
}

interface GetResponse {
  _embedded: {
    "category": Category[]
  }
}
