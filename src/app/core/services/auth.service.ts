import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private readonly _HttpClient= inject(HttpClient);
 private readonly _Router= inject(Router);

 userdata:any=null;
 

 setregisterform(data:object):Observable<any>
 {

  return this._HttpClient.post(`${environment.baseurl}/api/v1/auth/signup`,data)
 }


 setloginform(data:object):Observable<any>
 {

  return this._HttpClient.post(`${environment.baseurl}/api/v1/auth/signin`,data)

 }
 saveuserdata():void{
   if(localStorage.getItem('value')!==null){
    this.userdata= jwtDecode(localStorage.getItem('value')!)
    console.log('userdata',this.userdata)

   }

 }


 logout():void{
 localStorage.removeItem('value');
 this.userdata=null;
 this._Router.navigate(['/login']);

 }
 verifyemail(data:object):Observable<any>{

  return this._HttpClient.post(`${environment.baseurl}/api/v1/auth/forgotPasswords`,data)

 }


 verifyecode(data:object):Observable<any>{

  return this._HttpClient.post(`${environment.baseurl}/api/v1/auth/verifyResetCode`,data)

 }

 verifypassword(data:object):Observable<any>{

  return this._HttpClient.put(`${environment.baseurl}/api/v1/auth/resetPassword`,data)

 }



}
