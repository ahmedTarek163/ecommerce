import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Icat } from '../../core/interfaces/icat';
import { CurrencyPipe } from '@angular/common';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CurrencyPipe ,RouterLink],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit {

 private readonly _CartService=inject(CartService)
 private readonly _ToastrService=inject(ToastrService)

 cartdetails:Icat ={} as Icat
 

 ngOnInit(): void {
   
this._CartService.getcartdata().subscribe({

next:(res)=>{
console.log(res.data)
this.cartdetails=res.data

},

error:(err)=>{
  console.log(err)
  
  }


})




 }

 delet(id:string):void{
 this._CartService.deletcartdata(id).subscribe({
  next:(res)=>{
    console.log(res)
    this.cartdetails=res.data
    this._ToastrService.error('Deleted','freshCart')
    
  },
   error:(err)=>{
    console.log(err)
   }
  
 })


 }

 newcount(id:string,count:number):void{
  this._CartService.counttocart(id,count).subscribe({

  next:(res)=>{
       this.cartdetails=res.data
       this._ToastrService.success('Done','freshCart')
  },
error:(err)=>{
  console.log(err)
}


  })




 }
 cleerallcart():void{

  this._CartService.clearallcart().subscribe({
    next:(res)=>{

      this.cartdetails={} as Icat
    },
    error:(err)=>{
      console.log(err)
    }


  })
 }


}

