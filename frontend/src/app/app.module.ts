import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { NewsService } from './services/news.service';
import { NewsModule } from './news/news.module';
import { ArchiveModule } from './archive/archive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NewsModule,
    ArchiveModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
