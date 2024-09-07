import { Component, inject } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _AuthService= inject(AuthService);
  private readonly _Router= inject(Router);


  errormessage:string='';
  messagesuccess:boolean=false;
  spin:boolean=false;


 loginform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required, Validators.email]),
  password: new FormControl(null ,[Validators.required,Validators.pattern(/^\w{6,}$/)])
 })
 loginsubmit():void{
  if(this.loginform.valid){
    this.spin=true
    this._AuthService.setloginform(this.loginform.value).subscribe({

     next:(res)=>{
      console.log(res)
      this.spin=false
      if(res.message=='success'){
       this. messagesuccess=true
       
       setTimeout(() => {
        localStorage.setItem('value',res.token)
        this._AuthService.saveuserdata()
       this._Router.navigate(['/home'])
        
       }, 1000);

      }

     },
     error:(err)=>{
      console.log(err)
      this.errormessage=err.error.message;
      this.spin=false
        

     }

    })
   
  }
    else{
      this.loginform.setErrors({mismatch:true})
      this.loginform.markAllAsTouched()
    }
  }

 }





