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



/* get search */

handleInput(e:any){
  this.searchValue=e.target.value;
  console.log(this.searchValue)

  this.http.get(`${HOST_NAME}/api/users/search/${this.searchValue}`).subscribe( (res:any)=>{
       this.people=res
    console.log(this.people)

  })
    }




/* get id */

getid(id:any){
console.log(id)
this.rot.navigate(['/showprofile',id])

}


}
