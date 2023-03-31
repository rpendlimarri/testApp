import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TableDataComponent } from './table-data/table-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    FilterBarComponent,
    HomePageComponent,
    TableDataComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    HomePageComponent
  ]
})
// b(342332): This module is resonsible for holding the required modules for the Home page
export class HomeModule { }
