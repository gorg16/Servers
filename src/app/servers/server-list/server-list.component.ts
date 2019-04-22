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


  constructor(private serversService: ServersService ) { }

  ngOnInit() {

    this.servers = this.serversService.getServers();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
