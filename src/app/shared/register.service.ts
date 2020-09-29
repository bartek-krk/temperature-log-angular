import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class StationForm {
  constructor(public eMail:String, public location:string) {}
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(eMail:string,location:string) : Observable<any> {
    let station = new StationForm(eMail,location);
    return this.http.post("https://temperature-log.herokuapp.com/api/register", station,{responseType: 'text'});
  }
}
