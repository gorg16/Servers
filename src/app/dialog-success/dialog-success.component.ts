import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DialogData} from '../servers/server-detail/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrls: ['./dialog-success.component.css']
})
export class DialogSuccessComponent implements OnInit {

  public number = Math.floor(Math.random() * 1000000) ;

  constructor(public dialogRef: MatDialogRef<DialogSuccessComponent>,
              @Inject(MAT_DIALOG_DATA)  public data: DialogData) {
    dialogRef.disableClose = true;

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
