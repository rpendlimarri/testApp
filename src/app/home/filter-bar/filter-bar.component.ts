import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})

// (b/12345): Class to work with Filter-bar and it's filters
export class FilterBarComponent {
  selectedOption1!: string;
  selectedOption2!: string;
  constructor(public dialog: MatDialog) {}
  openCompareDialog(): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      data: {option1: this.selectedOption1, option2: this.selectedOption2},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result = ', result);
      this.selectedOption1 = result.selectedOption1;
      this.selectedOption2 = result.selectedOption2;

    });
  }
}
