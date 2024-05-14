import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from '../constant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage  {

 
  constructor(private http:HttpClient ,
     private rot:Router ,
     private cookieService: CookieService) {}

searchValue:any='';
people:any=[];
filterdata:any=[];
getting:any={};


/* get search */

handleInput(e:any){
  this.searchValue=e.target.value;
  console.log(this.searchValue)

  this.http.get(`${HOST_NAME}/api/users/search/${this.searchValue}`).subscribe( (res:any)=>{
       this.people=res
       this.filterdata=res

    console.log(this.people)

  })
    }



  /* back */

    goBack() {
      this.rot.navigate(['/tabs']);
    }




/* navigate */

getid(id:any){

console.log(id)
this.rot.navigate(['/showprofile',id])

}



/* del */


del(id:any){

  // console.log(id);
  this.getting=  this.people.find((item:any)=>item.id== id);
  // console.log(this.getting)
  const index=  this.people.indexOf(this.getting)
  this.filterdata.splice(index,1);
  }

}
