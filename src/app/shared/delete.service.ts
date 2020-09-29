import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  delete(stationId:string,apiKey:string):Observable<any>{
    let url = "https://temperature-log.herokuapp.com/api/stations/" + stationId;
    let headers = new HttpHeaders().set("api_key",apiKey);
    return this.http.delete(url,{headers:headers,responseType: 'text'});
  }
}
