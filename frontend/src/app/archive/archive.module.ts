import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive/archive.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class ArchiveModule { }
