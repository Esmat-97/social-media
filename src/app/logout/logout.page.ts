import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private rot:Router) { }

  ngOnInit() {

    localStorage.removeItem('name')
localStorage.removeItem('id')
localStorage.removeItem('email')

this.rot.navigate(['/login'])
  }


}
