import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServersService} from '../servers.service';
import {Server} from '../servers.modal';
import {MatDialog} from '@angular/material';
import {LogsDetailsComponent} from './logs-details/logs-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements  OnChanges {
  text: string;
  @Input() id: number;
  server: Server;
  servers: Server[];

  constructor(
    private serversService: ServersService,
    private  route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnChanges() {
    this.server = this.serversService.getServer(this.id);
  }



  openModal(text) {
    this.text = text;
    const dialogRef = this.dialog.open(LogsDetailsComponent, {
      height: '400px',
      width: '600px',
      data: {
        text: this.text
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }






}
