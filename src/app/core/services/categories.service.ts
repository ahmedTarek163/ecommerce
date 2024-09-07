import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient=inject(HttpClient)


  getcategories():Observable<any>{


    return this._HttpClient.get(`${environment.baseurl}/api/v1/categories`)
  }

  getspecificcategories(id:string):Observable<any>{


    return this._HttpClient.get(`${environment.baseurl}/api/v1/categories/${id}`)
  }
}
