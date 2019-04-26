import { Chart } from 'chart.js';

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
             nextPaymnet: string
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
 }
}
