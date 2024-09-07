import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgetpassward',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink ,NgClass],
  templateUrl: './forgetpassward.component.html',
  styleUrl: './forgetpassward.component.scss'
})
export class ForgetpasswardComponent {

  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)

  step:number=1;


  verifyemail:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })

  verifycode:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)])
  })

  verifypassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newpassword:new FormControl(null,[Validators.required,Validators.pattern(/^[0-6]{6}$/)])
  })



vemail():void{

   let email= this.verifyemail.get('email')?.value

   this.verifypassword.get('email')?.patchValue(email)
    

   this._AuthService.verifyemail(this.verifyemail.value).subscribe({

     next:(res)=>{
      console.log(res)
      if(res.statusMsg==='success'){
        this.step=2
      }
      
    },
   
    error:(err)=>{
      console.log(err) 
    }

   })

}

vcode():void{
  this._AuthService.verifyecode(this.verifycode.value).subscribe({

   next:(res)=>{
    console.log(res)
    if(res.status==='Success'){
      this.step=3
    }
    

   },
   error:(err)=>{
     console.log(err)
   }

  })

}

vREPASSWORD():void{
  this._AuthService.verifypassword(this.verifypassword.value).subscribe({

   next:(res)=>{
    console.log(res)
    localStorage.setItem('value',res.token);
    this._Router.navigate(['/home'])

   },
   error:(err)=>{
     console.log(err)
   }

  })

}



}


