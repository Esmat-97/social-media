import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private cookieService:CookieService) {}
  name:string='';
  id:string='';
  email:string='';
  image:string='';

  ngOnInit(){

     this.name = this.cookieService.get('name');
     this.id= this.cookieService.get('id');
this.email = this.cookieService.get('email');
    this.image = this.cookieService.get('image');
  

  }

}
