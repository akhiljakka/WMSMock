import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advice } from '../common/advice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {


  private apiUrl = 'http://localhost:8085/api/adviceInsertUpdate'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  insertUpdateOrder(advice: Advice): Observable<any> {
    return this.http.post<any>(this.apiUrl, advice);
  }

}