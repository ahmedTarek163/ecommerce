import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { ibrand } from '../../core/interfaces/ibrands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

  private readonly _BrandsService= inject(BrandsService)

    branddata :ibrand [] =[]

  ngOnInit(): void {
    this._BrandsService.allbrands().subscribe({
      next:(res)=>{
        
         this.branddata= res.data
         console.log(this.branddata)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
