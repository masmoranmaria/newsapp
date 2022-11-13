import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Inew } from '../interfaces/inew';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input () data: Inew = {
    _id: "",
    title: "",
    description: "",
    date: new Date(),
    content: "",
    author: ""
  };

  constructor(private newsService: NewsService) { };

  ngOnInit(): void {
  }

  archiveNew(id: string) {
    this.newsService.archive(id).subscribe(data => this.newsService.getNews());
  }

  deleteNew(id: string) {
    this.newsService.delete(id).subscribe(data => this.newsService.getArchive());
  }

}
