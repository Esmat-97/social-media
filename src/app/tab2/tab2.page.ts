import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from '../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchValue:any='';
  people:any=[];


  constructor(private http:HttpClient , private rot:Router) {}


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
