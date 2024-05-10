import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private cookieService: CookieService) { }


logout(){
  this.cookieService.delete('name');
  this.cookieService.delete('id');
  this.cookieService.delete('email');
  this.cookieService.delete('image');
}



}
