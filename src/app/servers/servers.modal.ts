import { Chart } from 'chart.js';

export class Server {
  public id: number;
 public name: string;
 public description: string;
 public imagePath: string;
 public serverType: string;
 public serverStatus: string;
 public chart: Chart;
 public serverCost: number;
 constructor(id: number,name: string, desc: string, imagePath: string, serverType: string, serverStatus: string, chart: Chart, serverCost: number) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
   this.serverType = serverType;
   this.serverStatus = serverStatus;
   this.chart = chart;
   this.serverCost = serverCost;
   this.id = id;
 }
}
