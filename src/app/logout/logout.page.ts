import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private rot:Router , private cookieService: CookieService) { }

  ngOnInit() {

    this.cookieService.delete('name');
    this.cookieService.delete('id');
    this.cookieService.delete('email');
    this.cookieService.delete('image');

this.rot.navigate(['/login'])
  }


}
