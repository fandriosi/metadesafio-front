import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }
  
  public login(user:string, password:string){
    const header = new HttpHeaders({authorization :"Basic "+btoa(user+":"+password)})
    return this.http.get("http://localhost:8080/resources");
  }
}
