import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MeasurementService } from '../shared/measurement.service';

@Component({
  selector: 'tl-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  measurements:Observable<any>;
  displayedColumns: string[] = ['timestamp', 'temperature'];
  location:string;

  constructor(private measurementService:MeasurementService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.measurements = this.measurementService.getMeasurements(parseInt(this.route.snapshot.paramMap.get('stationId')));
    this.measurements.subscribe(r => this.location = r[0].station.location);
  }

}
