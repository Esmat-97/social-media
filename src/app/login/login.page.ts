import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private rot:Router ,private http:HttpClient) { }

  ngOnInit() {
  }



  formdata(main:any){

this.http.post('http://192.168.1.2/api/login',main.value).subscribe((res:any)=>{
console.log(res)
localStorage.setItem('name',res.user.name)
localStorage.setItem('id',res.user.id)
localStorage.setItem('email',res.user.email)
})

this.rot.navigate(['/tabs'])
  }

  
}
