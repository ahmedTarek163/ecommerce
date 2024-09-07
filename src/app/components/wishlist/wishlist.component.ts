import { Component , inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { iwish } from '../../core/interfaces/iwich';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

  private readonly _CartService=inject(CartService)
  private readonly _ToastrService=inject(ToastrService)
  _WishlistService = inject(WishlistService);


  
  ngOnInit(): void {
this._WishlistService.renewData();
  }

  
  delet(id:string):void{

  this._WishlistService.deletitem(id).subscribe({

    next:(res)=>{
           console.log(res)
           this._WishlistService.getwishdata().subscribe({

            next:(res)=>{
              console.log(res.data)
              this._WishlistService.wishdata=res.data
              this._ToastrService.error('Deleted','freshCart')
            },
            error:(err)=>{
              console.log(err)
            }
          })

    },
    error:(err)=>{
      console.log(err)
    }


  })
  }




  addcart(id:string):void{

    this._CartService.addtocart(id).subscribe({
    
    next:(res)=>{
    console.log(res.data)
    this._ToastrService.success(res.message,'freshCart')

    },
    error:(err)=>{
      console.log(err)
      
      }
    
    })
    
    }
    

  

}
