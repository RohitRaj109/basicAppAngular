import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl:string ='http://localhost:8000/api/user';
  constructor(public http:HttpClient) { }

  getData(url:string){
    return this.http.get(url)
  }
  postData(url:string,data:Object){
    let urls= this.baseUrl + url;
    return this.http.post(urls,data);
  }
}
