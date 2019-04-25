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
  currentUser: any;


  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.serversService.serverTypes.subscribe( type => {
      this.serverType = type;
    });
  }

}
