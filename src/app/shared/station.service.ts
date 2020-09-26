import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Station {
  id:number,
  location:string,
  eMail:string,
  numberOfMeasurements:number
}


@Injectable({ providedIn: 'root' })
export class StationService{

  constructor(private http: HttpClient) { }

  getStations(): Station[] {
    let stations:Station[] = [];
    this.http.get<Station[]>('http://temperature-log.herokuapp.com/api/stations/').subscribe(s => s.forEach(item => stations.push(item)));
    return stations;
  }
}
