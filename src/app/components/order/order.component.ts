import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymevtService } from '../../services/paymevt.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ ReactiveFormsModule ,NgClass],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {


  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _PaymevtService=inject(PaymevtService)
  cartid:string | null =""



  inform:FormGroup=new FormGroup({

    details:new FormControl(null ,[Validators.required]),
    phone:new FormControl(null ,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null ,[Validators.required])

  })





  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({


      next:(param)=>{
          this.cartid= param.get('id')
         console.log(this.cartid);
          

      }
    })
    
  }
  

ordersub():void{
  console.log(this.inform.value)
  this._PaymevtService.pay(this.cartid,this.inform.value).subscribe({

    next:(res)=>{
      window.open(res.session.url ,'_self')
    },
    error:(err)=>{
    console.log(err)
    }
  })

}



}
