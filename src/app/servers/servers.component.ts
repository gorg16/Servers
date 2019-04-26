import {Component, Input, OnInit} from '@angular/core';
import {TableModel} from '../table.model';
import {ActivatedRoute, Params} from '@angular/router';
import {TablesService} from '../tables.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private tableService: TablesService) { }
  id: number;
  tables: TableModel[];
  table: TableModel;

  ngOnInit() {
    this.tables = this.tableService.getTablesModel();
    this.route.params
      .subscribe(
        (parmas: Params) => {
          this.id = +parmas['id'];
          this.table = this.tableService.getTable(this.id);
        }
      );

  }

}
