import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Inew } from 'src/app/shared/interfaces/inew';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {

  newsData: Inew[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => this.newsData = data);
  }

}
