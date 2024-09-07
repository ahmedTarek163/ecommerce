import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../core/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { iwish } from '../core/interfaces/iwich';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private readonly _HttpClient=inject(HttpClient)
  token:any = {token: localStorage.getItem('value')} 
private _ToastrServices = inject(ToastrService)

  datatowishlist(id:string):Observable<any>{

    return this._HttpClient.post(`${environment.baseurl}/api/v1/wishlist`,
    {
     "productId":id

    },{

      headers:this.token
    }
  )
  }



  getwishdata():Observable<any>{
    return this._HttpClient.get(`${environment.baseurl}/api/v1/wishlist` ,{
      headers:this.token
    }) 
  }

  deletitem(id:string):Observable<any>{
   return this._HttpClient.delete(`${environment.baseurl}/api/v1/wishlist/${id}`,{
    headers:this.token
   })

  }




  wishlist: string[] | any = [];
  wishdata:iwish[]=[]; 
     
      isInWishlist(id: string): boolean {
        return this.wishlist?.includes(id);
      }

      
      addwish(id:string):void{
        this.datatowishlist(id).subscribe({
         next:(res)=>{
          // console.log(res)
          this._ToastrServices.success(res.message,'freshCart')
          this.wishlist = res.data ; // ids
          localStorage.setItem('ids',res.data);
          
         
         },
         error:(err)=>{
          console.log(err)
         }
      
        })
      
      }


      delet(id:string):void{

        this.deletitem(id).subscribe({
      
          next:(res)=>{
                 console.log(res)
                this.wishlist=res.data;
                localStorage.setItem('ids',res.data);
                this.renewData();

          },
          error:(err)=>{
            console.log(err)
          }
      
      
        })
        }
      


      toggle(id:string):void{
        if(this.isInWishlist(id)){
          this.delet(id);
        }else{
          this.addwish(id);

        }

      }

      renewData():void{
        this.getwishdata().subscribe({
          next:(res)=>{
            this.wishdata = res.data;
          }
        })
      }


}
