import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {ServersService} from '../../servers.service';
import {Server} from '../../servers.modal';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements  OnChanges {
  @ViewChild('lineChart') private chartRef;
  chart: any;
   // server: Server;
  @Input() server: any;
  // @Input() Server: Server;
  // @Input()  index: number;


  constructor() {
     console.log(this.server, 'test');
     // console.log(this.server);
   }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
     // this.server = this.serversService.getServers();
    console.log(this.server, 'test');

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] , // your labels array
        datasets: [
          {
            data: this.server.chart, // your data array // server.chart
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
  //
  // let ctx = document.getElementById('myChart');
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: this.years,
  //     datasets: [
  //       {
  //         data: this.africa,
  //         label: 'Africa',
  //         borderColor: '#3e95cd',
  //         fill: false
  //       },
  //       {
  //         data: this.asia,
  //         label: 'Asia',
  //         borderColor: '#8e5ea2',
  //         fill: false
  //       },
  //       {
  //         data: this.europe,
  //         label: 'Europe',
  //         borderColor: '#3cba9f',
  //         fill: false
  //       },
  //       {
  //         data: this.latinAmerica,
  //         label: 'Latin America',
  //         borderColor: '#e8c3b9',
  //         fill: false
  //       },
  //       {
  //         data: this.northAmerica,
  //         label: 'North America',
  //         borderColor: '#c45850',
  //         fill: false
  //       }
  //     ]
  //   }
  // });

}
