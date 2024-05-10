import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private rot:Router ,
    private http:HttpClient , 
    private cookieService: CookieService) { }


  formdata(main:any){

    console.log(main.value)

this.http.post('http://192.168.1.6/api/login',main.value).subscribe((res:any)=>{
console.log(res)
console.log(res.user.id)

const currentDate = new Date();
    const expiryDate = new Date(currentDate.getTime() + 10 * 60 * 1000)
console.log(expiryDate)


this.cookieService.set('name', res.user.name ,expiryDate);
this.cookieService.set('id', res.user.id , expiryDate);
this.cookieService.set('email', res.user.email , expiryDate);
this.cookieService.set('image', res.user.image , expiryDate);


this.rot.navigate(['/tabs/tab1'])


})


  }

  
}
