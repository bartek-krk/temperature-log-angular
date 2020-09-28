import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(eMail:string,location:string) : string {
    //TODO http post
    return "Registered station for email: " + eMail + " in location: " + location + " (this function is still under maintainance)"; 
  }
}
