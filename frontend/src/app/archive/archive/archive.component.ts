import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html'
})

export class ArchiveComponent implements OnInit {

  constructor(private newsService: NewsService) { };

  get newsData() {
    return this.newsService.archives;
  }

  ngOnInit(): void {
    this.newsService.getArchive();
  }

}
