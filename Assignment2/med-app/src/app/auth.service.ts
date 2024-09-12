import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dev-api.evitalrx.in/v1/fulfillment/';

  constructor(private http: HttpClient) { }

  login(mobile: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, { mobile, password });
  }
}
