import {Component, Inject, OnInit} from '@angular/core';
import {Server} from '../../servers.modal';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-ci-cd-details',
  templateUrl: './ci-cd-details.component.html',
  styleUrls: ['./ci-cd-details.component.css']
})
export class CiCdDetailsComponent implements OnInit {
  index: number;
  public server: Server;

  constructor(public dialogRef: MatDialogRef<CiCdDetailsComponent>,
              @Inject(MAT_DIALOG_DATA)  public data: any
    ,
  ) { }

  ngOnInit() {
    this.server = this.data.server;
    // this.dialogRef.updateSize('90%', '80%');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
