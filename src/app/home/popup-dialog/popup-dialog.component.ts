import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * This class is responsible for the PopupDialogComponent
 */
@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})

export class PopupDialogComponent implements OnInit {
  // Temporary options data to render in the mat select component
  options: MatSelectData[] = [
    {value: 'one', viewValue: 'One'},
    {value: 'two', viewValue: 'Two'},
    {value: 'three', viewValue: 'Three'},
    {value: 'four', viewValue: 'Four'},
    {value: 'five', viewValue: 'Five'},
  ];
  // Given default values to the mat select components
  selectedOption1 = 'two';
  selectedOption2 = 'four';
  /**
   * Constructor with the following params
   * @param dialogRef - this is the dialog coomponent to load
   * @param data - this is the dialog data
   */
  constructor(
    public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  /**
   * At the time of initiating the component - This method is responsible for setting up
   * the default values to the selected options incase 'data' has been passed while
   * opening the PopupDialogComponent
   */
  ngOnInit(): void {
    if(this.data?.option1 !== undefined && this.data?.option2 !== undefined) {
      this.selectedOption1 = this.data?.option1;
      this.selectedOption2 = this.data?.option2;
    }
  }

  /**
   * This method is responsible for closing the dialog when the Cancel button clicked by the user
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**
 * This Interface is responsible for the definition of DialogData
 */
export interface DialogData {
  option1: string;
  option2: string;
}

/**
 * This interface is responsible for the MatSelectData - options that should be populated in the dropdown
 */
export interface MatSelectData {
  value: string;
  viewValue: string;
}
