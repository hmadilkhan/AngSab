import {inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/auth/authservice.service';



export const authGuard = () => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);

  if (authService.isloggedIn()) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
