import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  get<T>(
    service: string,
    endpoint: string,
    param?: any,
    query?: any,
  ): Observable<T> {
    if (query) {
      const params = new HttpParams({ fromObject: query });
      return this.http.get<T>(`${this.baseUrl}/${service}/${endpoint}`, {
        params,
      });
    } else {
      return this.http.get<T>(`${this.baseUrl}/${service}/${endpoint}/${param}`);
    }
  }
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }
}
