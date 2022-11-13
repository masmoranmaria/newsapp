import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  uri = 'http://172.17.0.1:3000';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(`${this.uri}/news`);
  }
}
