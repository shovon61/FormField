import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

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
