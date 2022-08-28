import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PlaceOrderRequest} from "../common/place-order-request";
import {Observable} from "rxjs";
import {PlaceOrderResponse} from "../common/place-order-response";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = `${environment.apiBaseUrl}/checkout/purchase`

  constructor(private httpClient: HttpClient) {
  }

  placeOrder(request: PlaceOrderRequest): Observable<PlaceOrderResponse> {
    return this.httpClient.post<PlaceOrderResponse>(this.purchaseUrl, request);
  }
}
