import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent {
  options: MatSelectData[] = [
    {value: 'one', viewValue: 'One'},
    {value: 'two', viewValue: 'Two'},
    {value: 'three', viewValue: 'Three'},
    {value: 'four', viewValue: 'Four'},
    {value: 'five', viewValue: 'Five'},
  ];
  selectedOption1 = 'two';
  selectedOption2 = 'four';
  constructor(
    public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


export interface DialogData {
  option1: string;
  option2: string;
}

export interface MatSelectData {
  value: string;
  viewValue: string;
}
