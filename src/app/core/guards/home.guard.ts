import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router)

if(typeof localStorage!=="undefined"){

  
  if(localStorage.getItem('value')!==null){
    return true
     }else{
       _router.navigate(['/login'])
       return false
     }

}else{
  return false
}
  
};
