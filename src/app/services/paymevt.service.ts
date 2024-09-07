import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymevtService {

 private readonly _HttpClient =inject(HttpClient)


 token:any = {token: localStorage.getItem('value')}
 
 pay(id:string|null,shipp:object):Observable<any>{

  return this._HttpClient.post(`${environment.baseurl}/api/v1/orders/checkout-session/${id}?url=http://ecommerce-lap.vercel.app`,
    {
      "shippingAddress":shipp
    },
    {
      headers:this.token
    }
  
  
  
  )
 }
}
