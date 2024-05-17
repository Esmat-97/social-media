import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HOST_NAME } from '../constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.page.html',
  styleUrls: ['./showpost.page.scss'],
})


export class ShowpostPage implements OnInit {


  selectedposts:any=[];
  selectedcomment:any=[];
 id:string='';
 postid:string='';
 commentnum:string='';

  constructor(private cookieService:CookieService ,
    private activatedRoute:ActivatedRoute ,
   private http:HttpClient ,
 private rot:Router) { }


 /* GET  POSTS */


  ngOnInit() {

   this.id= this.cookieService.get('id');

    this.postid= this.activatedRoute.snapshot.params['id']


   this.http.get(`${HOST_NAME}/api/posts/detail/${this.postid}`).subscribe((res:any)=>{
    this.selectedposts=res
    console.log(this.selectedposts)
    })

 

    this.http.get(`${HOST_NAME}/api/comments/${this.postid}`).subscribe((res:any)=>{
      this.selectedcomment=res
      console.log(this.selectedcomment)
      console.log(this.selectedcomment)
      })
   

      this.http.get(`${HOST_NAME}/api/comments/count/${this.postid}`).subscribe((res:any)=>{
        this.commentnum= res.comment_count    
      console.log(this.commentnum)
      })
    
  }




 /* POST */
 

 selectedFile: File | null = null; 
 imagename:string='';
 products:any={};


 onFileSelected(event: any) {

   this.selectedFile = event.target.files[0]; // Get the first file selected by the user
   if (this.selectedFile) {
    this.imagename = this.selectedFile.name; // Extract the file name
    console.log(this.imagename)
   }
 }


 
 formdata(main:any){

   this.products=main.value
     this.products.image=this.imagename
     this.products.user_id=this.id
     this.products.post_id=this.postid
 
 console.log(this.products);
 
this.http.post(`${HOST_NAME}/api/comments`,main.value).subscribe((res:any)=>{
console.log(res)
})


 }



  /*  nav */

  goBack() {
    this.rot.navigate(['/tabs']);
  }


  delcom(id:any){
 
    this.http.delete(`${HOST_NAME}/api/comments/${id}`).subscribe((res:any)=>{
      console.log(res)
      })
  }

}
