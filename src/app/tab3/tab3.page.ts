import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from '../constant';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private cookieService:CookieService , private http:HttpClient) {}

  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';
selectedpost:any=[];



/* GET */

  ngOnInit(){

     this.name = this.cookieService.get('name');
     this.id= this.cookieService.get('id');
   this.email = this.cookieService.get('email');
    this.imageuser = this.cookieService.get('image');

    console.log(this.id)

      this.http.get(`${HOST_NAME}/api/posts/select/${this.id}`).subscribe((res:any)=>{
        this.selectedpost=res
        console.log(this.selectedpost)
        }
      )

  }




  /* del */

  del(idpost:any){
    // console.log(idpost);
    this.http.delete(`${HOST_NAME}/api/posts/${idpost}`).subscribe((res:any)=>{

      })

    }




    
}
