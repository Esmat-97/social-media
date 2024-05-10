import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService ,private router: Router) { }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the presence of authentication data in cookies
    const name = this.cookieService.get('name');
    const id = this.cookieService.get('id');
    const email = this.cookieService.get('email');
    const image = this.cookieService.get('image');

    // Return true if all required authentication data is present, otherwise return false
    return this.cookieService.get('name') ? true : false ;      
  
  }
}
