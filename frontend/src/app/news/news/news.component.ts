import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {

  constructor(private newsService: NewsService) { };

  get newsData() {
    return this.newsService.news;
  }

  ngOnInit(): void {
    this.newsService.getNews();
  }

}
