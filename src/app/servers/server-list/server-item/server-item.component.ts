import {Component,  Input, OnInit} from '@angular/core';
import {Server} from '../../servers.modal';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  @Input() Server: Server;
  @Input()  index: number;

  ngOnInit() {
  }

}
