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
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule} from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

/**
 * This module is resonsible for holding the required modules for the Home page
 */
@NgModule({
  declarations: [
    FilterBarComponent,
    HomePageComponent,
    TableDataComponent,
    PopupDialogComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
