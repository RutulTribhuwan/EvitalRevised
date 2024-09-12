import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment/';
  private apiKey = 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3';

  constructor(private http: HttpClient) { }
  

  searchMedicines(query: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    const params = new HttpParams().set('search', query);

    return this.http.post(`${this.apiUrl}medicines/search`, { headers, params });
  }

  addPatient(patientData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.post(`${this.apiUrl}patients`, patientData, { headers });
  }

  placeOrder(orderData: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.post(`${this.apiUrl}orders`, orderData, { headers });
  }
}
