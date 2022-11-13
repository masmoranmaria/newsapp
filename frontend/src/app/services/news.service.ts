import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inew } from '../shared/interfaces/inew';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  uri = 'http://172.17.0.1:3000';

  constructor(private http: HttpClient) { }

  getNews(): Observable<Inew[]> {
    return this.http.get<Inew[]>(`${this.uri}/news`);
  }
}
