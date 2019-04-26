import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TableModel} from '../../table.model';
import {TablesService} from '../../tables.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ServersService} from '../servers.service';
import {Server} from '../servers.modal';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements  OnInit {
  id: number;
  server: Server;
  servers: Server[];
  serverData: any;

  constructor(private serversService: ServersService, private  route: ActivatedRoute, private dialog: MatDialog, private tableService: TablesService) { }

  ngOnInit() {
    const aaa = this.tableService.getSelectedServer();
    this.serverData = this.serversService.getServerData();
    console.log(this.serverData, 'ureeeeeeeeee');
    this.servers = this.serversService.getServers();
    this.route.params
      .subscribe(
        (parmas: Params) => {
          this.id = +parmas['id-1'];
          this.server = this.serversService.getServer(this.id);
        }
      );

  }


}
