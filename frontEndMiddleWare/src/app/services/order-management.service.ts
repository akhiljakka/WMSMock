import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderConfirm } from '../common/entity-confirm';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
  private baseUrl = 'http://localhost:8085/inbound//v1.0/orpHostsInbound/orderConfirm'
  constructor(private http: HttpClient) { }

  getOrders(): Observable<OrderConfirm[]> {
    return this.http.get<OrderConfirm[]>(this.baseUrl);
  }
}
