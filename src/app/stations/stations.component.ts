import { Component, OnInit } from '@angular/core';
import { Station,StationService } from '../shared/station.service';

@Component({
  selector: 'tl-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stations:Station[];
  displayedColumns: string[] = ['id', 'location', 'eMail', 'numberOfMeasurements', 'seeMeasurements'];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stations = this.stationService.getStations();
    console.log(this.stations);
  }

}
