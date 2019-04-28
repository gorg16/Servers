import { Chart } from 'chart.js';
import {LogsModel} from './logs.model';

export class Server {
 public id: number;
 public name: string;
 public description: string;
 public activeTime: string;
 public serverType: string;
 public serverStatus: string;
 public chart: Chart;
 public serverCost: number;
 public createdDate: string;
 public serverErrors: number;
 public lastPaymnet: string;
 public nextPayment: string;
 // public tableDatastatus1: string;
 // public tableDataStatus2: string;
 // public workedTimeFrom: Date;
 // public workedTimeTo: Date;
  public logs: LogsModel[];
 constructor(
             id: number,
             name: string,
             desc: string,
             activeTime: string,
             serverType: string,
             serverStatus: string,
             chart: Chart,
             serverCost: number,
             createdDate: string,
             serverErrors: number,
             lastPayment: string,
             nextPaymnet: string,
             // tableDataStatus1: string,
             // tableDataStatus2: string,
             // workedTimeFrom: Date,
             // workedTimeTo: Date
             logs: LogsModel[]
 ) {
   this.name = name;
   this.description = desc;
   this.activeTime = activeTime;
   this.serverType = serverType;
   this.serverStatus = serverStatus;
   this.chart = chart;
   this.serverCost = serverCost;
   this.id = id;
   this.createdDate = createdDate;
   this.serverErrors = serverErrors;
   this.lastPaymnet = lastPayment;
   this.nextPayment = nextPaymnet;
   // this.tableDatastatus1 = tableDataStatus1;
   // this.tableDataStatus2 = tableDataStatus2;
   // this.workedTimeFrom = workedTimeFrom;
   // this.workedTimeTo = workedTimeTo;
   this.logs = logs;
 }
}
