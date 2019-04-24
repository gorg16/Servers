import {Component,  Input, OnInit} from '@angular/core';
import {Server} from '../../servers.modal';
import {ServersService} from '../../servers.service';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  @Input() Server: Server;
  @Input()  index: number;
  public serverType: any;
  storageUsers: any;
  currentUser: any;

  ssh;
  http;
  web;
  // @Input('f') form;

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    // console.log(this.serverType );
    this.serversService.serverTypes.subscribe( type => {
    this.serverType = type;
    console.log(this.index, 'blablabla')
    // console.log(this.serverType);
    // this.ssh = this.serverType ? this.serverType.includes('ssh') : null;
    // this.http = this.serverType ? this.serverType.includes('http') : null;
    // this.web = this.serverType ? this.serverType.includes('Web') : null;
    // console.log( this.http, this.ssh, this.web);
    });

    // this.storageUsers = localStorage.getItem('Users');

    // this.storageUsers = JSON.parse(this.storageUsers);
    // console.log(this.storageUsers);
    // this.currentUser = this.storageUsers.find((r) => {
    //   return  r.type === ;
    // });
    // console.log(this.currentUser)


  }

}
