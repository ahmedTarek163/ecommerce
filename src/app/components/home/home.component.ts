import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AllproductsService } from '../../core/services/allproducts.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../services/wishlist.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule ,RouterLink ,CurrencyPipe,SearchPipe ,FormsModule ,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit ,OnDestroy {

  private readonly _AllproductsService =inject(AllproductsService)
  private readonly _categoriesService =inject(CategoriesService)
  private readonly _CartService =inject(CartService)
  private readonly _ToastrServices =inject(ToastrService)
   readonly _WishlistService =inject(WishlistService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)


  allproducts:Iproduct[]=[]
  allcategories:Icategory[]=[]
  productsub!:Subscription;
  word:string=''
  color:boolean=false
  wishlist: string[] = [];
  isInWishlist(id: string): boolean {
    return this.wishlist.includes(id);
  }
  
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true ,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  maincustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true ,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }

ngOnInit(): void {
  this._WishlistService.wishlist = localStorage.getItem('ids');
  this._NgxSpinnerService.show('load1')

this._categoriesService.getcategories().subscribe({
  
  next:(res)=>{
    this._NgxSpinnerService.hide('load1')
    this.allcategories=res.data
    
    console.log(res.data)

  },
  error:(err)=>{
    console.log(err)
  }
})



  this.productsub= this._AllproductsService.getallproducts().subscribe({

 next:(res)=>{
  console.log(res.data)
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
console.log(res)
this._ToastrServices.success(res.message,'freshCart')

},
error:(err)=>{
  console.log(err)
  
  }




})

}



}
