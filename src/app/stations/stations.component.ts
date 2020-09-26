import { Component, OnInit } from '@angular/core';
import { Station,StationService } from '../shared/station.service';

@Component({
  selector: 'tl-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stations:Station[];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.stations = this.stationService.getStations();
  }

}
