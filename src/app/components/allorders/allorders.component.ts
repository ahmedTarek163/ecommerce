import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AllorderService } from '../../services/allorder.service';
import { inject } from '@angular/core';
import { iall } from '../../core/interfaces/iall';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit  {


  private readonly _AllorderService =inject(AllorderService)
  userdata:any=null;
 userid:any=null
 allorders:iall[]=[]

  ngOnInit(): void {
     if(localStorage.getItem('value')!==null){
      this.userdata= jwtDecode(localStorage.getItem('value')!)
      console.log(this.userdata)
      this.userid=this.userdata.id
      console.log(this.userid)

 this._AllorderService.getorders(this.userid).subscribe({


  next:(res)=>{
    console.log(res);
    console.log(res[0].cartItems[0]);
    this.allorders=res
  },
  error:(err)=>{
    console.log(err)
  }
 })
      
     







    }
  }
    
  
  // saveuserdata():void{
  //   if(localStorage.getItem('value')!==null){
  //    this.userdata= jwtDecode(localStorage.getItem('value')!)
  //    console.log('userdata',this.userdata)
 
  //   }}

}
