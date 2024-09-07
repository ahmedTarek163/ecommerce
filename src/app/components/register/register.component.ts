import { Component, inject } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

   private readonly _AuthService= inject(AuthService);
   private readonly _Router= inject(Router);

   errormessage:string ="";
   spin:boolean=false;
   messagesuccess:boolean=false;

  registerform :FormGroup= new FormGroup({

      name: new FormControl(null , [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      email: new FormControl(null ,[Validators.required,Validators.email]),
      password: new FormControl(null ,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
      rePassword: new FormControl(null ),
      phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),


  } ,this.confirmpasswoed)


  registersubmit():void{
    if(this.registerform.valid){
      this.spin=true

     this._AuthService.setregisterform(this.registerform.value).subscribe(
      {
        next:(res)=>{
           console.log(res)
           this.spin=false
           if(res.message =='success'){
            this.messagesuccess=true

            setTimeout(() => {
              this._Router.navigate(['/login'])
            }, 1000);

           }
          
        },
        error:(err)=>{
          this.errormessage=err.error.message;
          console.log(err)
          this.spin=false
          
        }
      }
     )
     
    }else{
      this.registerform.setErrors({mismatch:true})
      this.registerform.markAllAsTouched()
    }

  }

  confirmpasswoed( g:AbstractControl){
    
    if(g.get("password")?.value===g.get("rePassword")?.value ){
      return null;

    }
    else{
      return {mismatch:true}
    }

  }

}
 