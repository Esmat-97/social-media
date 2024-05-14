import { Component } from '@angular/core';
import { HOST_NAME } from '../constant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  id:string='';
  selectedpost:any=[];
  filterdata:any=[];
  getting:any={};

  constructor(private http:HttpClient ,
              private rot:Router,
              private CookieService :CookieService 
  ){}


  /*  GET */

ngOnInit(){

  this.id= this.CookieService.get('id');

  console.log(this.id)
  
  this.http.get(`${HOST_NAME}/api/users/not/${this.id}`).subscribe((res:any)=>{
    this.selectedpost=res
    this.filterdata=res
    console.log(this.selectedpost)
    })

}


nav(id:any){
  // console.log(id)
  this.rot.navigate(['/showprofile',id])
  
  }


  del(id:any){

    // console.log(id);
    this.getting=  this.selectedpost.find((item:any)=>item.id== id);
    // console.log(this.getting)
    const index=  this.selectedpost.indexOf(this.getting)
    this.filterdata.splice(index,1);
    }

}
