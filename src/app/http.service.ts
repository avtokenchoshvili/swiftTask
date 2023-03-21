import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "./model/users";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getUserData(){
    return this._http.get<Users>('http://localhost:3000/users')
  }


  getUser(id:number){
    return this._http.get(`http://localhost:3000/users/${id}`)


  }

}
