import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Station {
  id:number,
  location:string,
  eMail:string,
  numberOfMeasurements:number
}


@Injectable({ providedIn: 'root' })
export class StationService{

  constructor(private http: HttpClient) { }

  getStations(): Observable<any> {
    return this.http.get<Station[]>("https://temperature-log.herokuapp.com/api/stations/");
  }
}
