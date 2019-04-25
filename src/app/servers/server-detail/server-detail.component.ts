import {Component,  OnInit} from '@angular/core';
import {Server} from '../servers.modal';
import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';
import {MatDialog} from '@angular/material';
import {MatDialogComponent} from './mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {
    id: number;
   server: Server;
  servers: Server[];

  constructor(private serversService: ServersService, private  route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.route.params
      .subscribe(
        (parmas: Params) => {
          this.id = +parmas['id'];
          this.server = this.serversService.getServer(this.id);
          console.log(this.server, 'saaa');
        }
      );
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });

  }


}
