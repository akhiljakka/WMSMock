import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../common/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8085/api/orderInsertUpdateDTO'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  insertUpdateOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }
}
