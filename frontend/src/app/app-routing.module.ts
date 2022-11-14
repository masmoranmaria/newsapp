import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive/archive.component';
import { NewsComponent } from './news/news/news.component';

const routes: Routes = [
  {
    path:"news",
    component: NewsComponent,
    pathMatch: "full"
  },
  {
    path:"archive",
    component: ArchiveComponent,
    pathMatch: "full"
  },
  {
    path:"",
    redirectTo:"news",
    pathMatch: "full"
  },
  {
    path:"**",
    redirectTo:"news",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
