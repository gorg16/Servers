import {Component,  OnDestroy, OnInit, } from '@angular/core';
import {Server} from '../servers.modal';
import {ServersService} from '../servers.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerListComponent implements OnInit, OnDestroy {

  servers: Server[];
  types = [];
  userService: Server[];


  constructor(private serversService: ServersService ) { }

  ngOnInit() {

    this.servers = this.serversService.getServers();
    this.types =  JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).types : null;
    this.userService = this.servers.filter(user => {
      for (let i = 0; i <= this.types.length ; i++) {
        if (user.serverType === this.types[i]) {
          return true;
        }
      }
    });
  }

  ngOnDestroy(): void {
  }

}
