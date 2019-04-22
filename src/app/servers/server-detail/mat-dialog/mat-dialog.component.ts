import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServerDetailComponent} from '../server-detail.component';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<MatDialogComponent>,
              @Inject(MAT_DIALOG_DATA)  public data: DialogData ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
