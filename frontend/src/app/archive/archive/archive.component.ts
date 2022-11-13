import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html'
})

export class ArchiveComponent implements OnInit {

  archiveData: any;

  constructor(private archive: NewsService) { }

  ngOnInit(): void {
    this.archive.getNews().subscribe((data) => this.archiveData = data);
  }

}
