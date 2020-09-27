import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  delete(stationId:string,apiKey:string) : string {
    //TODO http delete
    return "Entered ID " + stationId + " and API key: " + apiKey + " (this function is still under maintainance)";
  }
}
