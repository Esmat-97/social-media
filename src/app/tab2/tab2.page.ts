import { Component } from '@angular/core';
import { HOST_NAME } from '../constant';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedpost:any=[];

  constructor(private http:HttpClient){}

ngOnInit(){
  this.http.get(`${HOST_NAME}/api/users`).subscribe((res:any)=>{
    this.selectedpost=res.users
    console.log(this.selectedpost)
    })
}
}
