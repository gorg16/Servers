import { Injectable } from '@angular/core';
import {TableModel} from './table.model';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  selectedServer: any;
  constructor() { }

  public table: TableModel[] = [
    new TableModel(
      1,
      'Thu Apr 25 2019 15:01:05 GMT+0400 (Armenia Standard Time)',
      // tslint:disable-next-line:max-line-length
      'You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.',
      'success'
    ),
    new TableModel(
      2,
      'Thu Apr 25 2019 15:01:05 GMT+0400 (Armenia Standard Time)',
      // tslint:disable-next-line:max-line-length
      'You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.',
      'success'
    ),
    new TableModel(
      3,
      'Thu Apr 25 2019 15:01:05 GMT+0400 (Armenia Standard Time)',
      // tslint:disable-next-line:max-line-length
      'You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.',
      'success'
    ),
    new TableModel(
      4,
      '2018-07-22',
      // tslint:disable-next-line:max-line-length
      'You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.',
      'success'
    ),
    new TableModel(
      5,
      'Thu Apr 25 2019 15:01:05 GMT+0400 (Armenia Standard Time)',
      // tslint:disable-next-line:max-line-length
      'You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.',
      'success'),
  ];

  getTablesModel() {
    return this.table;
  }

  getTable(index: number) {
    return this.table[index];
  }

  setSelectedServer(data) {
    return this.selectedServer = data;
  }

  getSelectedServer() {
    console.log(this.selectedServer, 'this.selectedServer');
    return this.selectedServer;
  }

}

