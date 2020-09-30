import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MeasurementService } from '../shared/measurement.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'tl-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  measurements:Observable<any>;
  displayedColumns: string[] = ['timestamp', 'temperature'];
  location:string;
  linechart = [];
  labels = [];
  values = [];

  constructor(private measurementService:MeasurementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.measurements = this.measurementService.getMeasurements(parseInt(this.route.snapshot.paramMap.get('stationId')));
    this.measurements.subscribe(r => this.location = r[0].station.location);
    this.measurements.subscribe(r => {
      for(let i=0;i<r.length;i++) {
        this.labels.push(new Date(r[i].timestamp*1000).toLocaleString("en-US"));
        this.values.push(r[i].temperature);
      }
      this.linechart = new Chart('linechart', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: "Temperature [*C]",
            data: this.values,
            fill: false,
            lineTension: 0.5,
            borderColor: "green",
            borderWidth: 4
          }]
        },
        options: {
          title: {
            text: "Temperatures chart",
            display: true
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      });
    });
  }
}
