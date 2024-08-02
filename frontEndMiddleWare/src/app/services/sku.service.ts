import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sku } from '../common/sku';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {




  private apiUrl = 'http://localhost:8085/api/skuInsertUpdateDTO'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  insertUpdateOrder(sku: Sku): Observable<any> {
    return this.http.post<any>(this.apiUrl, sku);
  }

}

