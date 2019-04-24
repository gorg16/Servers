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

  // subscription: Subscription;
  servers: Server[];
  types = [];
  userService: Server[];


  constructor(private serversService: ServersService ) { }

  ngOnInit() {

    this.servers = this.serversService.getServers();
    this.types =  JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).types : null;

    console.log(this.types, 'types');
    this.userService = this.servers.filter(item => {
      // console.log(item.serverType, 'items');
      // console.log(this.types.indexOf(item.serverType))

      for (let i = 0; i <= this.types.length ; i++) {
        if (item.serverType === this.types[i]) {
            return true;
        }
      }
      // this.types.indexOf(item.serverType) !== -1;
    });
    console.log(this.userService, 'this.userService')
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
