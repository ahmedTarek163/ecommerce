import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllorderService {

private readonly _HttpClient =inject(HttpClient)


getorders(id:any):Observable<any>{

  return this._HttpClient.get(`${environment.baseurl}/api/v1/orders/user/${id}`)
}



}