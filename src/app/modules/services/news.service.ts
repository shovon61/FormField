import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {} from '@env/environment';

const APP_API_URL = `${environment.localApiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(`${APP_API_URL}/news`);
  }

  addNewsFn(payload: any): Observable<any> {
    return this.http.post(`${APP_API_URL}/news`, payload);
  }
}
