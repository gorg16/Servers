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
  @Input() server: any;




  constructor() {}


  ngOnChanges() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] , // your labels array
        datasets: [
          {
            data: this.server.chart,
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
}
