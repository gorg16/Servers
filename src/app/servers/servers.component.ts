import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Server} from './servers.modal';
import {ServersService} from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  id: number;
  server: Server;
  servers: Server[];

  constructor(private serversService: ServersService, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    console.log(this.servers, 'vvv');
    this.route.params
      .subscribe(
        (parmas: Params) => {
          this.id = +parmas['id'];
          this.server = this.serversService.getServer(this.id);
        }
      );
  }
}
