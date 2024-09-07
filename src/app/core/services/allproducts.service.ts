import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

 private readonly _HttpClient=inject(HttpClient);



 getallproducts():Observable<any>{

   return this._HttpClient.get(`${environment.baseurl}/api/v1/products`)
  
  }

   
   
   getspecficproduct( id:string|null):Observable<any>{

    return this._HttpClient.get(`${environment.baseurl}/api/v1/products/${id}`)}
 
 }
 
