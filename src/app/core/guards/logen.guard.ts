import { CanActivateFn ,Router } from '@angular/router';
import { inject } from '@angular/core';


export const logenGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)

  if(typeof localStorage!=="undefined"){
    if(localStorage.getItem('value')!==null){
      _router.navigate(['/home'])
   return false
    }else{
      
      return true
    }


  }else{
    return false
  }
   
  
};
