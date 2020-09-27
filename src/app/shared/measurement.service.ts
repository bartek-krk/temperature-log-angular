import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Station {
  id:number,
  location:string,
  eMail:string,
  numberOfMeasurements:number
}

export interface Measurement {
  id:number,
  timestamp:number,
  temperature:number,
  station:Station
}

@Injectable({
  providedIn: 'root'
})
export class MeasurementService{

  constructor(private http: HttpClient) { }

  getMeasurements(stationId:number): Observable<any> {
    return this.http.get<Measurement[]>("https://temperature-log.herokuapp.com/api/measurements/" + stationId);
  }

}
