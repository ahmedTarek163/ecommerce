import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly _HttpClient= inject(HttpClient) 



  allbrands():Observable<any>{
    return this._HttpClient.get(`${environment.baseurl}/api/v1/brands`)
  }
}
