import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {
  readonly BASE_END_POINT = '';
  constructor(private httpClient: HttpClient) {}

  getByCategoryId(categoryId: number): Observable<any> {
    // return this.httpClient.get(this.BASE_END_POINT, this.httpOptions);
    return this.httpClient.jsonp<any>(this.BASE_END_POINT, 'callback');
  }
}
