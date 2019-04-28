import {Component,  OnDestroy, OnInit, } from '@angular/core';
import {Server} from '../servers.modal';
import {ServersService} from '../servers.service';
import {LocalStorageService} from '../../local-storage.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerListComponent implements OnInit {

  servers: Server[];
  types = [];
  userService: Server[];


  constructor(private serversService: ServersService ) { }

  ngOnInit() {

    this.servers = this.serversService.getServers();
    this.types =  LocalStorageService.get('currentUser') ? LocalStorageService.get('currentUser').types : null;
    this.userService = this.servers.filter(user => {
      for (let i = 0; i <= this.types.length ; i++) {
        if (user.serverType === this.types[i]) {
          return true;
        }
      }
    });
  }


}
