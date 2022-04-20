import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>("https://3000-komalsonar8-crud-nsw2er87b6m.ws-us34.gitpod.io/posts",data)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("https://3000-komalsonar8-crud-nsw2er87b6m.ws-us34.gitpod.io/posts")
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  updateEmployee(data:any, id:number){
    return this.http.put<any>("https://3000-komalsonar8-crud-nsw2er87b6m.ws-us34.gitpod.io/posts"+id,data)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete<any>("https://3000-komalsonar8-crud-nsw2er87b6m.ws-us34.gitpod.io/posts"+id)
    .pipe(map((res : any)=>{
      return res;
    }))
  }

}
