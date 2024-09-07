import { Component,inject, OnDestroy, OnInit } from '@angular/core';
import { AllproductsService } from '../../core/services/allproducts.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../services/wishlist.service';
import { iwish } from '../../core/interfaces/iwich';



@Component({
  selector: 'app-product.carts',
  standalone: true,
  imports: [CarouselModule ,RouterLink ,CurrencyPipe,SearchPipe ,FormsModule,NgClass],
  templateUrl: './product.carts.component.html',
  styleUrl: './product.carts.component.scss'
})
export class ProductCartsComponent implements OnInit ,OnDestroy {

  private readonly _AllproductsService =inject(AllproductsService)
  private readonly _categoriesService =inject(CategoriesService)
  private readonly _CartService =inject(CartService)
  private readonly _ToastrServices =inject(ToastrService)
  readonly _WishlistService =inject(WishlistService)

  allproducts:Iproduct[]=[]
  allcategories:Icategory[]=[]
  productsub!:Subscription;
  word:string=''
  ngOnInit(): void {
    this._WishlistService.wishlist = localStorage.getItem('ids');

    this._categoriesService.getcategories().subscribe({
      
      next:(res)=>{
        this.allcategories=res.data
    
        // console.log(res.data)
    
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
    
    
      this.productsub= this._AllproductsService.getallproducts().subscribe({
    
     next:(res)=>{
      // console.log(res.data)
        this.allproducts= res.data;
    
     },
     error:(err)=>{
      console.log(err)
     }
    
    
    
      })
    
       
    
    }
    ngOnDestroy(): void {
      this.productsub?.unsubscribe()
      
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
