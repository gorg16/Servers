import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Server} from '../../servers.modal';

@Component({
  selector: 'app-logs-details',
  templateUrl: './logs-details.component.html',
  styleUrls: ['./logs-details.component.css']
})
export class LogsDetailsComponent implements OnInit {
  index: number;
  public server: Server;

  constructor(public dialogRef: MatDialogRef<LogsDetailsComponent>,
              @Inject(MAT_DIALOG_DATA)  public data: any
              ,
              ) { }

  ngOnInit() {
    this.server = this.data.server;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
