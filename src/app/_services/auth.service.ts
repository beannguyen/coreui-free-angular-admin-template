import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.API_URL}/login/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    let body = `username=${username}&password=${password}`;

    return this.http.post(AUTH_API + 'access-token', body, options);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${environment.API_URL}/register`, {
      username,
      email,
      password
    }, httpOptions);
  }
}