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

  postData(url: any, body: any): Observable<any> {
    return this.http.post<any>(this.url + url, JSON.stringify(body), this.httOptions)
  }

  getData(url: any): Observable<any> {
    return this.http.get<any>(this.url + url, this.httOptions)
  }

  putData(urlParams:any): Observable<any> { 
    return this.http.put(this.url + urlParams, this.httOptions)
  }
}
