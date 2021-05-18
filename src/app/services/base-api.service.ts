import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  url = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /**
   * test
   */
  public test(): Observable<any> {
    return this.http.get<any>(this.url + 'user/test', this.httOptions)
  }
}
