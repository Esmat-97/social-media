import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from '../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private cookieService:CookieService
     , private http:HttpClient ,
       private rot:Router) {}

  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';
  commentnum:string='';
  likesnum:string='';
  postid:string=''
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
        })

        this.http.get(`${HOST_NAME}/api/posts/count/${this.id}`).subscribe((res:any)=>{
          this.commentnum= res.comment_count    
        console.log(this.commentnum)
        })


        this.http.get(`${HOST_NAME}/api/user/${this.id}/likes`).subscribe((res:any)=>{
          this.likesnum= res.count 
        console.log(this.likesnum)
        })
  }



  /* del */

  del(idpost:any){
    // console.log(idpost);
    this.http.delete(`${HOST_NAME}/api/posts/${idpost}`).subscribe((res:any)=>{

      })

    }



    /* nav */

nav(id:any){

this.rot.navigate(['/showpost',id])

}
    
}
