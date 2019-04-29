import {Component, Input, OnChanges} from '@angular/core';
import {Server} from '../servers.modal';
import {ServersService} from '../servers.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {MatDialogComponent} from './mat-dialog/mat-dialog.component';
import {LocalStorageService} from '../../local-storage.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnChanges {
    @Input() id: number;
   server: Server;
  servers: Server[];
  currentUserNumber;
  staticIp = '37.272.71.27';

  constructor(
    private serversService: ServersService,
    private  route: ActivatedRoute,
    private dialog: MatDialog,) { }

  ngOnChanges() {
    this.currentUserNumber = LocalStorageService.get('currentNumber');
    this.server = this.serversService.getServer(this.id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }


}
