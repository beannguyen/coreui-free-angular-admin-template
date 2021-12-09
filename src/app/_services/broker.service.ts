import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }

  public getBrokerInfo(): Observable<any> {
    return this.http.get(`${environment.API_URL}/broker`);
  }

  public connect(code: String): Observable<any> {
    return this.http.post(`${environment.API_URL}/broker/connect?code=${code}`, null);
  }
}
