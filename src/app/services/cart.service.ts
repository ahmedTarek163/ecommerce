import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private readonly _HttpClient= inject(HttpClient) 

 token:any = {token: localStorage.getItem('value')}  



addtocart(id:string):Observable<any>{

return this._HttpClient.post(`${environment.baseurl}/api/v1/cart`,
{
  
  "productId":id
},
{  
  headers:this.token
}



)
 }

getcartdata():Observable<any>{

return this._HttpClient.get(`${environment.baseurl}/api/v1/cart`,{  
  headers:this.token
})


}
deletcartdata(id:string):Observable<any>{

  return this._HttpClient.delete(`${environment.baseurl}/api/v1/cart/${id}`,{  
    headers:this.token
  })
  
  
  }

  counttocart(id:string , count:number):Observable<any>{

    return this._HttpClient.put(`${environment.baseurl}/api/v1/cart/${id}`,
    {
      
      "count":count
    },
    {  
      headers:this.token
    }

  )
}
clearallcart():Observable<any>{

 return this._HttpClient.delete(`${environment.baseurl}/api/v1/cart`,{

  headers: this.token
 })


}


 


}

