import { Component,inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
private  readonly _CategoriesService= inject(CategoriesService)
alldata:Icategory[]=[]

ngOnInit(): void {

 
    this._CategoriesService.getcategories().subscribe({
  
      next:(res)=>{
        console.log(res)
        this.alldata=res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  
  
}



}
