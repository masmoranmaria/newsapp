import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inew } from '../shared/interfaces/inew';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private currentNews: Inew[] = [];

  private archiveNews: Inew[] = [];

  uri = `${environment.backend_url}/news`;

  constructor(private http: HttpClient) { }

  get news(): Inew[] {
    return [...this.currentNews];
  }

  get archives() : Inew[] {
    return [...this.archiveNews];
  }

  getNews() {
    this.http.get<Inew[]>(`${this.uri}`).subscribe((data) => this.currentNews = data);
  }

  getArchive() {
    this.http.get<Inew[]>(`${this.uri}/archive`).subscribe((data) => this.archiveNews = data);
  }

  archive(id: string): Observable<Inew> {
    return this.http.put<Inew>(`${this.uri}/${id}`, {});
  } 

  delete(id: string): Observable<Inew> {
    return this.http.delete<Inew>(`${this.uri}/${id}`);
  }

}
