import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

export const authGuard: CanActivateFn = (route, state) => {

  let accountService = inject(AccountService);

  let user = accountService.getActiveUser();

  //login olmadan admin sayfasına gidilmek istediğinde guard engelleyip login sayfasına yönlendirdi
  if (!user) {
   let router = inject(Router);
   router.navigateByUrl('/account/login'); 
   return false;
  }

  return true;

};
