import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllproductsService } from '../../core/services/allproducts.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _AllproductsServic = inject(AllproductsService)
  private readonly _CartService = inject(CartService)
  private readonly _ToastrServices =inject(ToastrService)


  details: Iproduct | null = null
  

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({

      next:(p)=>{
         
          let productid =p.get('id')
          this._AllproductsServic.getspecficproduct(productid).subscribe({

            next:(res)=>{
              console.log(res.data)
              
              this.details=res.data  
            },
            error:(err)=>{
              console.log(err)
            }

          })


      }
    })
    
  }
  addcart(id:string):void{

    this._CartService.addtocart(id).subscribe({
    
    next:(res)=>{
    // console.log(res)
    this._ToastrServices.success(res.message,'freshCart')
    
    },
    error:(err)=>{
      console.log(err)
      
      }
    
    
    
    
    })
    
    }



}
